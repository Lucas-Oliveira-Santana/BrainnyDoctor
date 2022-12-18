import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreatePatientInput } from './dto/create-patient.input';
import { PatientDTO } from './dto/patient.dto';
import { UpdatePatientInput } from './dto/update-patient.input';
import { Patient } from './entities/patient.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Patient])],
      resolvers: [
        {
          DTOClass: PatientDTO,
          EntityClass: Patient,
          CreateDTOClass: CreatePatientInput,
          UpdateDTOClass: UpdatePatientInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class PatientsModule {}
