
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { CommonService } from '../../../services/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtService } from '../../../services/jwt.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})



export class AdminLoginComponent implements OnInit {

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
    if (this.loginForm.valid) {
      this.token.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDQ2MzU4MjEsImV4cCI6MTczNjE3MTgyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIk5hbWUiOiJNb2hkIFJpeWFuIiwiUm9sZSI6ImFkbWluIiwiSWQiOiI1ZjRlZTQzNy01OWM3LTQzMjUtOTQ4My1iZDAzZDQ5ODhhZWUifQ.zOJvQveknwVqGJFIKj3yd68cBGfS-YcOZmWZd1YG2Gg")
      this.router.navigate(['/case-history'], { replaceUrl: true });
      console.log('Form submitted successfully!');
      window.location.reload()

    }
  }
}
