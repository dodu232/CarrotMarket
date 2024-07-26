import { Injectable } from '@nestjs/common';
import { CreateGoodsDto } from 'src/trade/dto/createGoods.dto';
import { TradeRepository } from 'src/trade/repository/trade.repository';

@Injectable()
export class TradeService {
  constructor(private tradeRepository: TradeRepository) {}

  async createGoods(dto: CreateGoodsDto) {
    return this.tradeRepository.createGoods(dto);
  }
}
