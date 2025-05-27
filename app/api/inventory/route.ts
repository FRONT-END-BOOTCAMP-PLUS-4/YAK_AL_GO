// app/api/inventory/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hpid = searchParams.get("hpid");

  if (!hpid) {
    return NextResponse.json({ error: "Missing hpid" }, { status: 400 });
  }

  try {
    const inventory = await prisma.inventories.findMany({
      where: { hpid },
      include: {
        medicines: {
          select: {
            item_name: true,
            entp_name: true,
            class_no: true,
          },
        },
      },
    });

    const formatted = inventory.map((item: typeof inventory[number]) => ({
      id: item.id,
      name: item.medicines.item_name,
      company: item.medicines.entp_name ?? "",
      type: item.medicines.class_no ?? "",
      stock: item.quantity,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
