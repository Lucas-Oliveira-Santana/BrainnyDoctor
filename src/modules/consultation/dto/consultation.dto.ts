import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { DoctorDTO } from '../../doctors/dto/doctor.dto';
import { PatientDTO } from '../../patients/dto/patient.dto';

@ObjectType('Consultation')
@FilterableRelation('patients', () => PatientDTO)
@FilterableRelation('doctors', () => DoctorDTO)
export class ConsultationDTO {
  @FilterableField()
  patientId: string;

  @FilterableField()
  doctorId: string;

  @FilterableField()
  hour_consultation: Date;

  @FilterableField()
  id?: string;
}
