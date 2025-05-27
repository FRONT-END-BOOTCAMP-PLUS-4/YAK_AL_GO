// app/api/inventory/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // 경로는 실제 프로젝트에 맞게 조정

export async function GET(req: NextRequest) {
  const hpid = req.nextUrl.searchParams.get("hpid");
  if (!hpid) return NextResponse.json([], { status: 400 });

  const data = await prisma.inventories.findMany({
    where: { hpid },
    include: { medicines: true },
  });

  const formatted = data.map((item) => ({
    id: item.id,
    name: item.medicines.item_name,
    company: item.medicines.entp_name ?? "",
    type: item.medicines.class_no ?? "기타",
    stock: item.quantity,
  }));

  return NextResponse.json(formatted);
}

export async function PATCH(req: NextRequest) {
  const { id, stock } = await req.json();

  if (typeof id !== "number" || typeof stock !== "number") {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const updated = await prisma.inventories.update({
      where: { id },
      data: { quantity: stock },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (typeof id !== "number") {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.inventories.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { itemSeq, hpid, quantity } = await req.json();

    if (!itemSeq || !hpid || typeof quantity !== "number") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const exists = await prisma.inventories.findFirst({
      where: { itemSeq, hpid },
    });

    if (exists) {
      return NextResponse.json(
        { error: "Inventory already exists for this item." },
        { status: 400 }
      );
    }

    const result = await prisma.inventories.create({
      data: {
        itemSeq,
        hpid,
        quantity,
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("POST /api/inventory error:", error);
    return NextResponse.json({ error: "Failed to add inventory" }, { status: 500 });
  }
}