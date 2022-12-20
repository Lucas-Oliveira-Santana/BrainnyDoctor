import { Field, ObjectType } from '@nestjs/graphql';
import { Doctor } from '../../modules/doctors/entities/doctor.entity';

@ObjectType()
export class AuthType {
  // @Field(() => Doctor)
  // user: Doctor;

  @Field(() => String)
  token: string;
}
