import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  // email
  @ApiProperty({
    description: 'Example Email',
    example: 'JohDoe@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  // password
  @ApiProperty({
    description: 'Example password',
    example: 'U8oowzV3FS3v0at',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
// class LoginDto {
//   // email
//   @ApiProperty({
//     description: 'Example Email',
//     example: 'JohDoe@gmail.com',
//   })
//   @IsNotEmpty()
//   @IsEmail()
//   email: string;
//   // password
//   @ApiProperty({
//     description: 'Example password',
//     example: 'U8oowzV3FS3v0at',
//   })
//   @IsNotEmpty()
//   @IsString()
//   password: string;
// }
// class RegisterDto {
//   // email
//   @ApiProperty({
//     description: 'Example Name',
//     example: 'John Doe',
//   })
//   @IsNotEmpty()
//   @IsEmail()
//   name: string;
//   // email
//   @ApiProperty({
//     description: 'Example Email',
//     example: 'JohDoe@gmail.com',
//   })
//   @IsNotEmpty()
//   @IsEmail()
//   email: string;
//   // password
//   @ApiProperty({
//     description: 'Example password',
//     example: 'U8oowzV3FS3v0at',
//   })
//   @IsNotEmpty()
//   @IsString()
//   password: string;
// }
// export { LoginDto, RegisterDto };
