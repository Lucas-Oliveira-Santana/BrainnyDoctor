import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConsultationDTO } from '../../consultation/dto/consultation.dto';
import { IllnessDTO } from '../../illness/dto/illness.dto';

@ObjectType('Patient')
@FilterableRelation('illness', () => IllnessDTO)
@FilterableOffsetConnection('consultations', () => ConsultationDTO, {
  nullable: true,
})
export class PatientDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  email: string;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  createdAt: Date;

  id: string;
}
