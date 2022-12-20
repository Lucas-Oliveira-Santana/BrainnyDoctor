import { Illness } from '../../illness/entities/illness.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Consultation } from '../../consultation/entities/consultation.entity';
import { hashPasswordTransform } from '../../../common/helpers/crypto';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    transformer: hashPasswordTransform,
  })
  password: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Illness)
  illnessId?: string;

  @OneToMany(() => Consultation, (consultations) => consultations.patientId)
  consultation: Consultation[];
}
