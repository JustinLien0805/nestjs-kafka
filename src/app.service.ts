import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';
@Injectable()
export class AppService {
  constructor(private readonly productService: ProducerService) {}

  async getHello() {
    await this.productService.produce({
      topic: 'test',
      messages: [{ value: 'Hello World!' }],
    });
    return 'Hello World!';
  }
}
