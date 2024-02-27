import { PrismaService } from "src/database/prisma.service";
import { StockRepository } from "../stock-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaStockRepository implements StockRepository {

    constructor(
        private prisma: PrismaService
    ) {}

    async create(name: string, value: number): Promise<void> {
        await this.prisma.stock.create({
            data: {
                name, 
                value,
            } 
        })
    }
}