import { Injectable, NotFoundException } from "@nestjs/common";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class DeleteServiceService {

    constructor(private readonly repository: IServiceRepository) { }

    async execute(id: string): Promise<void> {
        const service = await this.repository.findById(id);
        if (!service) {
            throw new NotFoundException("Service not found.");
        }

        await this.repository.delete(id);
    }
}