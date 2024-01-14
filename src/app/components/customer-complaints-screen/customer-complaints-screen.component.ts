import { Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-complaints-screen',
  templateUrl: './customer-complaints-screen.component.html',
  styleUrls: ['./customer-complaints-screen.component.css']
})
export class CustomerComplaintsScreenComponent {
  complains!: any[];

  selectedCustomers!: any[];
  complainForm: any
  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  displayModal: boolean = false;
  openAddNumberModal(type: any) {
    this.displayModal = true;
    this.complainForm.get("type").setValue(type)
  }
  @ViewChild('addCasePanel') addCasePanel: any;
  addCaseForm: any;
  selectedStatus: any;

  constructor(private fb: FormBuilder) {
    this.complainForm = this.fb.group({
      message: ["", [Validators.required]],
      topic: ["", [Validators.required]],
      type: ["", [Validators.required]]

    })
  }
  ngOnInit() {
    this.complains = [
      {
        id: 1,
        complainNumber: 'CNR123',
        customerId: 'CASE001',
        customerName: 'John Doe',
        email: "abc@gmail.com",
        date: '2022-01-01',
        topic: 'Some Topic',
        message: 'I am Shawn Mendez, a resident of Rory Lane. I am writing to bring to your notice the poor maintenance of the garden around our residential area and the improper disposal of waste. The garden around the residential area was watered regularly, and grass shrubs were trimmed and maintained neatly in the beginning. It has been more than a month now since any kind of maintenance is done in the garden. We have tried contacting the person in charge, but every effort has just been in vain.',
        validateAndApprove: '2022-01-15',
        nextDate: '2022-01-20',
        status: 'Pending'
      },
      {
        id: 2,
        complainNumber: 'CNR456',
        customerId: 'CASE002',
        customerName: 'Jane Smith',
        email: "abc@gmail.com",
        date: '2022-02-01',
        topic: 'Another Topic',
        message: 'I am Shawn Mendez, a resident of Rory Lane. I am writing to bring to your notice the poor maintenance of the garden around our residential area and the improper disposal of waste. The garden around the residential area was watered regularly, and grass shrubs were trimmed and maintained neatly in the beginning. It has been more than a month now since any kind of maintenance is done in the garden. We have tried contacting the person in charge, but every effort has just been in vain.',
        validateAndApprove: '2022-02-15',
        nextDate: '2022-02-20',
        status: 'Resolved'
      },
      {
        id: 3,
        complainNumber: 'CNR123',
        customerId: 'CASE001',
        customerName: 'John Doe',
        email: "abc@gmail.com",
        date: '2022-01-01',
        topic: 'Some Topic',
        message: 'I am Shawn Mendez, a resident of Rory Lane. I am writing to bring to your notice the poor maintenance of the garden around our residential area and the improper disposal of waste. The garden around the residential area was watered regularly, and grass shrubs were trimmed and maintained neatly in the beginning. It has been more than a month now since any kind of maintenance is done in the garden. We have tried contacting the person in charge, but every effort has just been in vain.',
        validateAndApprove: '2022-01-15',
        nextDate: '2022-01-20',
        status: 'Pending'
      },
      {
        id: 4,
        complainNumber: 'CNR456',
        customerId: 'CASE002',
        customerName: 'Jane Smith',
        email: "abc@gmail.com",
        date: '2022-02-01',
        topic: 'Another Topic',
        message: 'I am Shawn Mendez, a resident of Rory Lane. I am writing to bring to your notice the poor maintenance of the garden around our residential area and the improper disposal of waste. The garden around the residential area was watered regularly, and grass shrubs were trimmed and maintained neatly in the beginning. It has been more than a month now since any kind of maintenance is done in the garden. We have tried contacting the person in charge, but every effort has just been in vain.',
        validateAndApprove: '2022-02-15',
        nextDate: '2022-02-20',
        status: 'Resolved'
      },
      // Add more sample data as needed
    ];
    this.loading = false;

    this.complains.forEach(
      (complain) => (complain.date = new Date(<Date>complain.date))
    );

  }
  submit() {
    if (this.complainForm.invalid) {
      return
    }
    if (this.complainForm.value.type === 'Complain') {

    } else if (this.complainForm.value.type === 'Feedback') {

    }
  }
}
