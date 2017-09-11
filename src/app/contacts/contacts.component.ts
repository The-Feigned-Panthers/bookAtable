import { ContactsService } from './../core/services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  message: {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    question: string
  };

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.message = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      question: ''
    };
  }

  send() {
    this.service.saveForm(this.message);
    this.message = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      question: ''
    };
  }
}
