import { Patient } from '../../patients/entities/patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Doctor } from '../../doctors/entities/doctor.entity';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hour_consultation: Date;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column()
  patientId: string;

  @ManyToOne(() => Doctor)
  doctor: Doctor;

  @Column()
  doctorId: string;
}
