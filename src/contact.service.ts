import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  handleContactForm(formData: any): { message: string } {
    console.log(formData);
    return { message: 'Form data received successfully!' };
  }
}
