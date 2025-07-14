import { Injectable } from "@nestjs/common";
import { Service } from "src/domain/entities/service.entity";
import { IServiceRepository } from "src/domain/repositories/iservice.repository";

@Injectable()
export class FindAllServicesService {

    constructor(private readonly repository: IServiceRepository) { }

    async execute(): Promise<Service[]> {
        return await this.repository.findAll();
    }
}