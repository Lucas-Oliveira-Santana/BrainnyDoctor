import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Consultation')
export class ConsultationDTO {
  @FilterableField()
  doctor_id: string;

  @FilterableField()
  patient_id: string;

  @FilterableField()
  Hour_consultation: Date;

  @FilterableField()
  id: string;
}
