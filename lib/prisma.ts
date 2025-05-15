import { PrismaClient } from '@prisma/generated'
import { withAccelerate } from '@prisma/extension-accelerate'

type PrismaClientWithAccelerate = ReturnType<typeof PrismaClient.prototype.$extends>

const globalForPrisma = global as unknown as {
  prisma: PrismaClientWithAccelerate
}
const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
