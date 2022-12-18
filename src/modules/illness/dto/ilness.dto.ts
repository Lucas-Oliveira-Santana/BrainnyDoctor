import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Illness')
export class IllnessDTO {
  @FilterableField()
  id: string;

  @FilterableField()
  name: string;
}
