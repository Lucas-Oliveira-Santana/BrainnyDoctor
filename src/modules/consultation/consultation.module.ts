import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ConsultationDTO } from './dto/consultation.dto';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { Consultation } from './entities/consultation.entity';
@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Consultation])],
      resolvers: [
        {
          DTOClass: ConsultationDTO,
          EntityClass: Consultation,
          CreateDTOClass: CreateConsultationInput,
          UpdateDTOClass: UpdateConsultationInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ConsultationModule {}
