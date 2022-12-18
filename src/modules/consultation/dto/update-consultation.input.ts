import { CreateConsultationInput } from './create-consultation.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateConsultationInput extends PartialType(
  CreateConsultationInput,
) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
