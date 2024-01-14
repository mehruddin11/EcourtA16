import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
    private fb: FormBuilder,
    private token: JwtService) { }
  ngOnInit() {
    if (this.token.isAuthenticated()) {
      this.router.navigate(["/case-page"])
    }
    this.initForm();
  }
  loginForm: any
  submitted = false;
  private initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // Your form submission logic goes here
    // For example, you can check if the form is valid before proceeding
    if (this.loginForm.valid) {
      // Perform login or other actions
      this.token.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDQ2MzU4MjEsImV4cCI6MTczNjE3MTgyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIk5hbWUiOiJNb2hkIFJpeWFuIiwiUm9sZSI6ImN1c3RvbWVyIiwiSWQiOiI1ZjRlZTQzNy01OWM3LTQzMjUtOTQ4My1iZDAzZDQ5ODhhZWUifQ.WY_xjpysGwOuEoJrHpKkBc94XSdLQxf4RD7mSwhS0Lo")
      setTimeout(() => {
        this.router.navigate(['/case-page'], { replaceUrl: true });

      }, 2000);
      console.log('Form submitted successfully!');
    }
  }
}
