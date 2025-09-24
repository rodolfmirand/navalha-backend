import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { IServiceRepository } from "src/domain/repositories/iservice.repository";
import { ServiceRepositoryImpl } from "src/infrastructure/persistence/repositories/service.repository.impl";

@Injectable()
export class DeleteServiceService {

    constructor(@Inject('ServiceRepository') private readonly repository: IServiceRepository) { }

    async execute(id: string): Promise<void> {
        const service = await this.repository.findById(id);
        if (!service) {
            throw new NotFoundException("Service not found.");
        }

        await this.repository.delete(id);
    }
}