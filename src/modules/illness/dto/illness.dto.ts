import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { PatientDTO } from '../../patients/dto/patient.dto';

@ObjectType('Illness')
@FilterableOffsetConnection('patients', () => PatientDTO, { nullable: true })
export class IllnessDTO {
  @FilterableField()
  id: string;

  @FilterableField()
  name: string;
}
