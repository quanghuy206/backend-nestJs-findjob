import { Type } from 'class-transformer';
import { IsDefined, IsEmail, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsObject, ValidateNested } from 'class-validator';
import mongoose from 'mongoose';

//data transfer object // class = { }
class Company {
    @IsNotEmpty()
    _id: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    name: string;
}

//Admin
export class CreateUserDto {

    @IsNotEmpty({ message: 'Name không được để trống', })
    name: string;

    @IsEmail({}, { message: 'Email không đúng định dạng', })
    @IsNotEmpty({ message: 'Email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống', })
    password: string;

    @IsNotEmpty({ message: 'Age không được để trống', })
    age: string;

    @IsNotEmpty({ message: 'Gender không được để trống', })
    gender: string;

    @IsNotEmpty({ message: 'Address không được để trống', })
    address: string;

    @IsNotEmpty({ message: 'Role không được để trống', })
    @IsMongoId({ message: "Role có định dạng là mongo Id" })
    role: mongoose.Schema.Types.ObjectId;

    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company!: Company;
}

//Client
export class RegisterUserDto {

    @IsNotEmpty({ message: 'Name không được để trống', })
    name: string;

    @IsEmail({}, { message: 'Email không đúng định dạng', })
    @IsNotEmpty({ message: 'Email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống', })
    password: string;

    @IsNotEmpty({ message: 'Age không được để trống', })
    age: string;

    @IsNotEmpty({ message: 'Gender không được để trống', })
    gender: string;

    @IsNotEmpty({ message: 'Address không được để trống', })
    address: string;
}

