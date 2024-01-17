import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback-screen',
  templateUrl: './feedback-screen.component.html',
  styleUrls: ['./feedback-screen.component.scss']
})
export class FeedbackScreenComponent implements OnInit {
  feedbacks!: any[];
  
  selectedCustomers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  addCaseForm: any;
  statusOptions: any[];
  selectedStatus: any;

  constructor(private fb: FormBuilder) {
    this.statusOptions = [
      { label: 'Pending', value: 'Pending' },
      { label: 'Received', value: 'Received' },
      { label: 'Resolved', value: 'Resolved' },
      { label: 'Unresolved', value: 'Unresolved' },
      { label: 'Closed', value: 'Closed' }
    ];
  }
  ngOnInit() {
    this.feedbacks = [
      {
        id: 1,
        complainNumber: 'FEED123',
        customerId: 'iudkfjwesdhvo',
        customerName: 'John Doe',
        date: '2022-01-01',
        email: 'abc@gmail.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-01-15',
        nextDate: '2022-01-20',
        status: 'Pending'
      },
      {
        id: 2,
        complainNumber: 'FEED456',
        customerId: 'i7yighewk',
        customerName: 'Jane Smith',
        date: '2022-02-01',
        email: 'abc@email.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-02-15',
        nextDate: '2022-02-20',
        status: 'Resolved'
      },
      {
        id: 3,
        complainNumber: 'FEED123',
        customerId: 'iudkfjwesdhvo',
        customerName: 'John Doe',
        date: '2022-01-01',
        email: 'abc@gmail.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-01-15',
        nextDate: '2022-01-20',
        status: 'Pending'
      },
      {
        id: 4,
        complainNumber: 'FEED456',
        customerId: 'i7yighewk',
        customerName: 'Jane Smith',
        date: '2022-02-01',
        email: 'abc@email.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-02-15',
        nextDate: '2022-02-20',
        status: 'Resolved'
      },
      {
        id: 5,
        complainNumber: 'FEED123',
        customerId: 'iudkfjwesdhvo',
        customerName: 'John Doe',
        date: '2022-01-01',
        email: 'abc@gmail.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-01-15',
        nextDate: '2022-01-20',
        status: 'Pending'
      },
      {
        id: 6,
        complainNumber: 'FEED456',
        customerId: 'i7yighewk',
        customerName: 'Jane Smith',
        date: '2022-02-01',
        email: 'abc@email.com',
        message: 'Feedback is a way to let people know how effective they are in what they are trying to accomplish, or how they affect you. It provides a way for people to learn how they affect the world around them, and it helps us to become more effective. If we know how other people see us, we can overcome problems in how we communicate and interact with them. Of course, there are two sides to it: giving feedback, and receiving it',
        validateAndApprove: '2022-02-15',
        nextDate: '2022-02-20',
        status: 'Resolved'
      },
      // Add more sample data as needed
    ];
    this.loading = false;

    this.feedbacks.forEach(
      (feedback) => (feedback.date = new Date(<Date>feedback.date))
    );

  }
}

