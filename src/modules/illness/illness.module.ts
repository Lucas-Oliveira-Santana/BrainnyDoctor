import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateIllnessInput } from './dto/create-illness.input';
import { IllnessDTO } from '../illness/dto/illness.dto';
import { UpdateIllnessInput } from './dto/update-illness.input';
import { Illness } from './entities/illness.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Illness])],
      resolvers: [
        {
          DTOClass: IllnessDTO,
          EntityClass: Illness,
          CreateDTOClass: CreateIllnessInput,
          UpdateDTOClass: UpdateIllnessInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class IllnessModule {}
