import { IsNotEmpty, IsString, Length } from "class-validator";

export class BarbershopAddressDto {
    @IsString()
    @IsNotEmpty()
    street: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    district: string;

    @IsString()
    @IsNotEmpty()
    number: string;

    @IsNotEmpty()
    @IsString()
    @Length(2)
    state: string;
}