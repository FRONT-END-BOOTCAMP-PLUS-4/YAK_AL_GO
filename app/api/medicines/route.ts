import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const itemSeq = searchParams.get("itemSeq")

  try {
    if (itemSeq) {
      // Get specific medicine by item_seq
      const medicine = await prisma.medicines.findUnique({
        where: { item_seq: itemSeq },
      })
      return NextResponse.json(medicine)
    } else {
      // Get all medicines
      const medicines = await prisma.medicines.findMany()
      return NextResponse.json(medicines)
    }
  } catch (error) {
    console.error("Error fetching medicines:", error)
    return NextResponse.json({ error: "약품 데이터를 가져오는데 실패했습니다." }, { status: 500 })
  }
}
