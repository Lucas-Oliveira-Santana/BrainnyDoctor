import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from '../modules/doctors/entities/doctor.entity';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'fd67a188-0bfe-4337-8a92-eca7525afbbd',
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
