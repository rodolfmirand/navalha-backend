import { Injectable, NotFoundException } from "@nestjs/common";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class DeleteServiceService {

    constructor(private readonly repository: ServiceRepositoryImpl) { }

    async execute(id: string): Promise<void> {
        const service = await this.repository.findById(id);
        if (!service) {
            throw new NotFoundException("Service not found.");
        }

        await this.repository.delete(id);
    }
}