import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePatientInput {
  @IsNotEmpty({ message: "This field can't be empty" })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: "This field can't be empty" })
  email: string;

  @IsNotEmpty({ message: "This field can't be empty" })
  password: string;

  illnessId?: string;
}
