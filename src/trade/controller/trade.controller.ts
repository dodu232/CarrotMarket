import { Body, Controller, Post } from '@nestjs/common';
import { CreateGoodsDto } from 'src/trade/dto/createGoods.dto';
import { TradeService } from 'src/trade/service/trade.service';

@Controller('trade')
export class TradeController {
  constructor(private tradeService: TradeService) {}

  @Post()
  createGoods(@Body() dto: CreateGoodsDto) {
    return this.tradeService.createGoods(dto);
  }
}
