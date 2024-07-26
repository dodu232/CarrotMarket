import { Injectable } from '@nestjs/common';
import { CreateGoodsDto } from 'src/trade/dto/createGoods.dto';
import { Goods } from 'src/trade/entity/goods.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TradeRepository {
  private repository: Repository<Goods>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Goods);
  }

  createGoods(dto: CreateGoodsDto) {
    return this.repository.save(dto);
  }
}
