import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

import { CommonService } from "../../../services/common.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { JwtService } from "../../../services/jwt.service";

@Component({
  selector: "app-register-screen",
  templateUrl: "./register-screen.component.html",
  styleUrls: ["./register-screen.component.scss"],
})
export class RegisterScreenComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private token: JwtService,
  ) { }

  registerFormStep1: any;
  registerFormStep2: any;
  registerFormStep3: any;
  submitted = false;
  categoryOptions: any[] | undefined;
  stateOptions = [
    { label: "Select State", value: null },
    { label: "State 1", value: "state1" },
    { label: "State 2", value: "state2" },
    { label: "State 3", value: "state3" },
  ];

  districtOptions = [
    { label: "Select District", value: null },
    { label: "District 1A", value: "district1A" },
    { label: "District 1B", value: "district1B" },
    { label: "District 2A", value: "district2A" },
    { label: "District 2B", value: "district2B" },
  ];

  cityOptions = [
    { label: "Select City", value: null },
    { label: "City 1A", value: "city1A" },
    { label: "City 1B", value: "city1B" },
    { label: "City 2A", value: "city2A" },
    { label: "City 2B", value: "city2B" },
  ];

  currentStep = 0;

  steps = [
    { label: "Personal Details", command: () => this.onStepChange(0) },
    { label: "Verification", command: () => this.onStepChange(1) },
    { label: "Create Credentials", command: () => this.onStepChange(2) },
  ];

  ngOnInit() {
    this.registerFormStep1 = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      state: [null, Validators.required],
      district: [null, Validators.required],
      city: [null, Validators.required],
      address: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      category: [null, Validators.required],
      profession: ["", Validators.required],
    });

    this.registerFormStep2 = this.formBuilder.group({
      otp: ["", Validators.required],
    });

    this.registerFormStep3 = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.categoryOptions = [
      { label: "Select Category", value: null },
      { label: "Advocate", value: "ADVOCATE" },
      { label: "User", value: "USER" },
      { label: "Office Professional", value: "OFFICE" },
      // Add more options as needed
    ];
  }

  onStepChange(step: any) {
    this.currentStep = step;
  }

  onSubmitStep1() {
    this.submitted = true;
    try {
      if (this.registerFormStep1.valid) {
        this.authService
          .registration(this.registerFormStep1.value)
          .subscribe((e: any) => {
            if (e.statusCode === 200) {
              this.currentStep = 1;
              this.submitted = false;
              this.toast.success("Please verify number");
            }
          });
        this.currentStep = 1;
        this.submitted = false;
      }
    } catch (error: any) {
      console.log(error);
      this.toast.error(error.message);
    }
  }

  onSubmitStep2() {
    this.submitted = true;
    try {
      if (this.registerFormStep2.valid) {
        this.authService
          .verifyRegistration(this.registerFormStep2.value)
          .subscribe((e: any) => {
            if (e.statusCode === 200) {
              this.currentStep = 2;
              this.submitted = false;
              this.toast.success("Create Credentials");
            }
          });
        this.currentStep = 2;
        this.submitted = false;
      }
    } catch (error: any) {
      console.log(error);
      this.toast.error(error.message);
    }
  }

  onSubmitStep3() {
    this.submitted = true;
    try {
      if (this.registerFormStep3.valid) {
        this.authService
          .createCredentials(this.registerFormStep3.value)
          .subscribe((e: any) => {
            if (e.statusCode === 200) {
              this.currentStep = 2;
              this.submitted = false;
              this.toast.success("Registered Successfully");
            }
          });
        this.token.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDQ2MzU4MjEsImV4cCI6MTczNjE3MTgyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIk5hbWUiOiJNb2hkIFJpeWFuIiwiUm9sZSI6ImN1c3RvbWVyIiwiSWQiOiI1ZjRlZTQzNy01OWM3LTQzMjUtOTQ4My1iZDAzZDQ5ODhhZWUifQ.WY_xjpysGwOuEoJrHpKkBc94XSdLQxf4RD7mSwhS0Lo")
        this.currentStep = 2;
        this.submitted = false;
        window.location.reload()
        this.router.navigate(['/case-page'], { replaceUrl: true });
      }
    } catch (error: any) {
      console.log(error);
      this.toast.error(error.message);
    }
    if (this.registerFormStep3.valid) {
      this.submitted = false;

      console.log("Form submitted successfully!");
      // Perform registration or other actions for step 3
    }
  }
}
