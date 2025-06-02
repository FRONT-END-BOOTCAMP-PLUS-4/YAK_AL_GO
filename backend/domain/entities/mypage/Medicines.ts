export class Medicines {
  constructor(
    public readonly itemSeq: string,
    public readonly itemName: string,
    public readonly entpName: string | null,
  ) {}
}