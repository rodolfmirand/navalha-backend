import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from "class-validator";

export class AddServiceToBarberDto {

    @IsUUID('4')
    @IsNotEmpty()
    barberId: string;

    @IsArray()
    @IsUUID('4', { each: true })
    @ArrayMinSize(1)
    servicesId: string[];
}