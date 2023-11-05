import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    // Retrieve and return the message for اتباط با ما section from your data source
    // For example, you can fetch it from a database or a file
    return 'Your message for اتباط با ما section';
  }
}
