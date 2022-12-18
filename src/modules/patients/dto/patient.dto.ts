import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Patient')
export class PatientDTO {
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
