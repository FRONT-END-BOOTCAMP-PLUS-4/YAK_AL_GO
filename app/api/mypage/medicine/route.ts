import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const medicines = await prisma.user_medis.findMany({
      where: {
        userId: userId,
      },
      select: {
        start_date: true,
        end_date: true,
        medicines: {
          select: {
            item_name: true,
          }
        }
      },
    });

    const formattedMedicines = medicines.map((med) => ({
      name: med.medicines.item_name,
      startDate: med.start_date ? med.start_date.toISOString().split('T')[0] : null,
      endDate: med.end_date ? med.end_date.toISOString().split('T')[0] : '계속',
      active: med.end_date ? new Date(med.end_date) > new Date() : true,
    }));

    return NextResponse.json(formattedMedicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medicine data' },
      { status: 500 }
    );
  }
}