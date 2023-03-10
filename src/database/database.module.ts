import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'teste',
      password: 'teste',
      database: 'teste',
      entities: ['**/modules/**/entities/*.js'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
