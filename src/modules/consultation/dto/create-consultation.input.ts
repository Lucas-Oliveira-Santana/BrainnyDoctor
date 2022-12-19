import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateConsultationInput {
  doctorId: string;

  patientId: string;

  hour_consultation: Date;
}
