import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { StockRepository } from './repositories/stock-repository';
import { CreateStocksBody } from './database/dtos/create-stock-body.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private stockRepository: StockRepository
    ) {}

  @Post() 
  async createStock(@Body() body: CreateStocksBody)  {
    await this.stockRepository.create(body.name, body.value)
    return "Deu certo corno!"
  }



}
