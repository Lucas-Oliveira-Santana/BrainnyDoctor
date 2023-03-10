import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { PatientsModule } from './modules/patients/patients.module';
import { ConsultationModule } from './modules/consultation/consultation.module';
import { IllnessModule } from './modules/illness/illness.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
      sortSchema: true,
    }),
    DatabaseModule,
    DoctorsModule,
    PatientsModule,
    ConsultationModule,
    IllnessModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
