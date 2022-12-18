import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateDoctorInput } from './dto/create-doctor.input';
import { DoctorDTO } from './dto/doctor.dto';
import { UpdateDoctorInput } from './dto/update-doctor.input';
import { Doctor } from './entities/doctor.entity';
@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Doctor])],
      resolvers: [
        {
          DTOClass: DoctorDTO,
          EntityClass: Doctor,
          CreateDTOClass: CreateDoctorInput,
          UpdateDTOClass: UpdateDoctorInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class DoctorsModule {}
