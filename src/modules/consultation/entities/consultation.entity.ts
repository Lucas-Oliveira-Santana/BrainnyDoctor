import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
