import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  resetPasswordSendForm: any
  submitted = false;
  private initForm() {
    this.resetPasswordSendForm = this.fb.group({
      mobileNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // Your form submission logic goes here
    // For example, you can check if the form is valid before proceeding
    if (this.resetPasswordSendForm.valid) {
      // Perform login or other actions
      console.log('Form submitted successfully!');
    }
  }
}
