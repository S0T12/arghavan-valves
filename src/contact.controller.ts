import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('api')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('contact')
  handleContactForm(@Body() formData: any) {
    return this.contactService.handleContactForm(formData);
  }
}
