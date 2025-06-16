import { IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class BarbershopAddressDto {
    @IsString()
    @IsNotEmpty()
    readonly street: string;

    @IsString()
    @IsNotEmpty()
    readonly city: string;

    @IsString()
    @IsNotEmpty()
    readonly disctrict: string;

    @IsString()
    @IsNotEmpty()
    readonly number: string;

    @IsNotEmpty()
    @IsString()
    @Length(2)
    readonly state: string;
}