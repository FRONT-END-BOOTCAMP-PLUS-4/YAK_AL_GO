export class Medicine {
  constructor(
    public readonly id: number,
    public readonly itemSeq: string,
    public readonly itemName: string,
    public readonly startDate: Date | null,
    public readonly endDate: Date | null,
  ) {}

  isActive(): boolean {
    if (!this.endDate) return true;
    return new Date(this.endDate) > new Date();
  }
}