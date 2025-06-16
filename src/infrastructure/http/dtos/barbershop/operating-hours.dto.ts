import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { DayOfWeek } from "src/domain/enums/day-of-week";

export class OperatingHoursDto {
    @IsEnum(DayOfWeek)
    readonly dayOfWeek: DayOfWeek;

    @IsNotEmpty()
    @IsString()
    readonly openingTime: string;

    @IsNotEmpty()
    @IsString()
    readonly closingTime: string;
}