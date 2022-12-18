import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateConsultationInput {
  @Field(() => String)
  doctor_id: string;

  @Field(() => String)
  patient_id: string;

  @Field(() => Date)
  Hour_consultation: Date;
}
