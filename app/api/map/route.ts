import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const medicine = searchParams.get("medicine")

  try {
    if (medicine) {
      // Get pharmacies that have the specified medicine in inventory
      const pharmaciesWithMedicine = await prisma.pharmacies.findMany({
        include: {
          inventories: {
            where: {
              medicines: {
                item_name: {
                  contains: medicine,
                },
              },
            },
            include: {
              medicines: true,
            },
          },
        },
      })

      return NextResponse.json(pharmaciesWithMedicine)
    } else {
      // Get all pharmacies with their inventories
      const pharmacies = await prisma.pharmacies.findMany({
        include: {
          inventories: {
            include: {
              medicines: true,
            },
          },
        },
      })

      return NextResponse.json(pharmacies)
    }
  } catch (error) {
    console.error("Error fetching pharmacies:", error)
    return NextResponse.json({ error: "약국 데이터를 가져오는데 실패했습니다." }, { status: 500 })
  }
}
