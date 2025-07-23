import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { DayOfWeek } from "src/domain/enums/day-of-week";

export class OperatingHoursDto {
    @IsEnum(DayOfWeek)
    dayOfWeek: DayOfWeek;

    @IsNotEmpty()
    @IsString()
    openingTime: string;

    @IsNotEmpty()
    @IsString()
    closingTime: string;
}