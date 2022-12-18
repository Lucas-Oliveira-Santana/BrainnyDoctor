import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateIllnessInput {
  @Field()
  name: string;
}
