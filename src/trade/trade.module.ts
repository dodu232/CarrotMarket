import { Module } from '@nestjs/common';
import { TradeService } from './service/trade.service';
import { TradeController } from './controller/trade.controller';
import { TradeRepository } from 'src/trade/repository/trade.repository';

@Module({
  providers: [TradeService, TradeRepository],
  controllers: [TradeController],
})
export class TradeModule {}
