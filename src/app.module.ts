import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { TradeModule } from './trade/trade.module';
import { APP_PIPE } from '@nestjs/core';
import { ImageModule } from './image/image.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'carrotmarket',
      entities: ['dist/**/*.entity.js'],
      synchronize: process.env.DATABASE_SYNCHRONIZE == 'true',
      migrationsRun: false,
      migrations: [__dirname + '/**/migrations/*.js}'],
      migrationsTableName: 'migrations',
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
    TradeModule,
    ImageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
