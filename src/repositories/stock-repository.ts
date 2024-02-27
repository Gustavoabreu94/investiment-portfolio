

export abstract class StockRepository {
    abstract create(name: string, value: number): Promise<void>;
}