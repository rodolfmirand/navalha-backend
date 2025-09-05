import { UUID } from "crypto";

export type AuthJwtPayload = {
    sub: UUID;
}