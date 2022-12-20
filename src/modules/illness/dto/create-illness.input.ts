import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateIllnessInput {
  name: string;
}
