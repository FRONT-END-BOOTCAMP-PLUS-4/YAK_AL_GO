import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const medicines = await prisma.medicines.findMany({
    select: {
      item_seq: true,
      item_name: true,
      entp_name: true,
      class_no: true,
    },
    orderBy: {
      item_name: "asc",
    },
  });

  return NextResponse.json(medicines);
}
