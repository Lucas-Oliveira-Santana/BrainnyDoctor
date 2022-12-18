import { CreateIllnessInput } from './create-illness.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateIllnessInput extends PartialType(CreateIllnessInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
