import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConsultationDTO } from '../../consultation/dto/consultation.dto';

@ObjectType('Doctor')
@FilterableOffsetConnection('consultations', () => ConsultationDTO, {
  nullable: true,
})
export class DoctorDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  email: string;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  id: string;
}
