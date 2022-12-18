import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Illness {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
