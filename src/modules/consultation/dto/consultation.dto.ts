import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';
import { PatientDTO } from '../../patients/dto/patient.dto';

@ObjectType('Consultation')
@FilterableRelation('patient', () => PatientDTO)
@FilterableRelation('doctor', () => DoctorDTO)
export class ConsultationDTO {
  @FilterableField()
  doctor_id: string;

  @FilterableField()
  patient_id: string;

  @FilterableField()
  Hour_consultation: Date;

  @FilterableField()
  id?: string;
}
