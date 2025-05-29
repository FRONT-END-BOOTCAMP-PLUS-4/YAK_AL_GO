import prisma from '@/lib/prisma';
import { InventoryRepository } from './InventoryRepository';
import { InventoryItem } from '@/backend/domain/entities/inventory/InventoryItem';
import { Medicine } from '@/backend/domain/entities/inventory/Medicine';

export class PrismaInventoryRepository implements InventoryRepository {
  async getInventoryByHpid(hpid: string): Promise<InventoryItem[]> {
    const records = await prisma.inventories.findMany({
      where: { hpid },
      include: {
        medicines: true,
      },
    });

    return records.map((r) => ({
      id: r.id,
      itemSeq: r.itemSeq,
      name: r.medicines.item_name,
      company: r.medicines.entp_name || '',
      type: r.medicines.type_name || '',
      stock: r.quantity,
    }));
  }

  async addInventoryItem(hpid: string, itemSeq: string, quantity: number): Promise<void> {
    await prisma.inventories.create({
      data: {
        hpid,
        itemSeq,
        quantity,
      },
    });
  }

  async updateInventoryStock(id: number, stock: number): Promise<void> {
    await prisma.inventories.update({
      where: { id },
      data: { quantity: stock },
    });
  }

  async deleteInventoryItem(id: number): Promise<void> {
    await prisma.inventories.delete({
      where: { id },
    });
  }

  async getAllMedicines(): Promise<Medicine[]> {
    const medicines = await prisma.medicines.findMany({
      select: {
        item_seq: true,
        item_name: true,
        entp_name: true,
        type_name: true,
      },
    });

    return medicines;
  }
}
