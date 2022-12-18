import { Patient } from '../../patients/entities/patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  doctor_id: string;

  @Column()
  patient_id: string;

  @Column()
  Hour_consultation: Date;

  @ManyToOne(() => Patient)
  PatientId: string;

  @ManyToOne(() => Doctor)
  DoctorId: string;
}
