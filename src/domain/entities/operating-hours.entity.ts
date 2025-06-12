import { DayOfWeek } from "../enums/day-of-week";

export class OperatingHours {
    id: string;
    barbershopId: string;

    dayOfWeek: DayOfWeek;

    openingTime: string;
    closingTime: string;
}