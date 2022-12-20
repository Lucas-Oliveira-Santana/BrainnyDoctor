import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/modules/doctors/entities/doctor.entity';
import { Repository } from 'typeorm';
import { compareSync } from 'bcrypt';
import { AuthInput } from './dtos/auth.input';
import { AuthType } from './dtos/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  async validateUser({ email, password }: AuthInput): Promise<AuthType> {
    const user = await this.doctorRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Email or password is Incorrect');
    }

    const validPassword = compareSync(password, user.password);

    if (!validPassword) {
      throw new NotFoundException('Email or password is Incorrect');
    }

    const token = await this.jwtToken(user);

    return {
      // user,
      token,
    };
  }

  private async jwtToken(doctor: Doctor): Promise<string> {
    const payload = { username: doctor.name, sub: doctor.id };
    return this.jwtService.signAsync(payload);
  }
}
