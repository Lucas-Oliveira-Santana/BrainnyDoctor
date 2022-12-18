import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePatientInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  illnessId?: string;
}
