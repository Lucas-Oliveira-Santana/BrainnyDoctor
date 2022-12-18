import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Doctor')
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
