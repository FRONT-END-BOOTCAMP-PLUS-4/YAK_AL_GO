import { NextRequest, NextResponse } from 'next/server';
import { PrismaInventoryRepository } from '@/backend/domain/repositories/inventory/PrismaInventoryRepository';
import { getInventoryByPharmacy } from '@/backend/application/usecases/inventory/getInventoryByPharmacy';
import { addInventoryItem } from '@/backend/application/usecases/inventory/addInventoryItem';
import { updateInventoryStock } from '@/backend/application/usecases/inventory/updateInventoryStock';
import { deleteInventoryItem } from '@/backend/application/usecases/inventory/deleteInventoryItem';

const repository = new PrismaInventoryRepository();

export async function GET(req: NextRequest) {
  const hpid = req.nextUrl.searchParams.get('hpid');
  if (!hpid) {
    return NextResponse.json({ error: 'hpid is required' }, { status: 400 });
  }

  try {
    const inventory = await getInventoryByPharmacy(hpid, repository);
    return NextResponse.json(inventory);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load inventory' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { hpid, itemSeq, quantity } = await req.json();

  if (!hpid || !itemSeq || quantity === undefined) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await addInventoryItem(hpid, itemSeq, quantity, repository);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add item' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const { id, stock } = await req.json();

  if (!id || stock === undefined) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await updateInventoryStock(id, stock, repository);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update stock' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    await deleteInventoryItem(id, repository);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
