import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { StockRepository } from './repositories/stock-repository';
import { PrismaStockRepository } from './repositories/prisma/prisma-stock-repository';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService, 
    {
      provide: StockRepository,
      useClass: PrismaStockRepository, 
    },
  ],
})

export class AppModule {}
