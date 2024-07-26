import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'database-1.cjo66ygaol41.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'qhrud5832',
  database: 'carrotmarket',
  // entities: ['dist/**/*.entity.js'],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
});
