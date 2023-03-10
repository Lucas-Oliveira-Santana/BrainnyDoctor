import { CreateDoctorInput } from './create-doctor.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDoctorInput extends PartialType(CreateDoctorInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
