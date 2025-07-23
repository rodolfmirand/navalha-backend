import { IsEnum } from "class-validator";
import { DayOfWeek } from "src/domain/enums/day-of-week";

export class OperatingHoursResponseDto {
    @IsEnum(DayOfWeek)
    readonly dayOfWeek: DayOfWeek;
    
    readonly openingTime: string;
    readonly closingTime: string;
}