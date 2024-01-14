import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: any;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.valid && this.passwordsMatch()) {
      // Your password reset logic goes here
      console.log('Form submitted successfully!');
    }
  }

  passwordsMatch(): boolean {
    const password = this.resetPasswordForm.get('password').value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
    return password === confirmPassword;
  }

  passwordsDoNotMatch(): boolean {
    return this.submitted && !this.passwordsMatch();
  }
}
