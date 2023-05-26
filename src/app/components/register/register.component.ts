import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSignedIn = false;
  siteKey = "6Lc6tWclAAAAAFeRdj952i55fLgWgaoDuqST8EBA";

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  // register form
  buildRegisterForm() {
    this.registerForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [],
      confirm_password: []
    });
  }



  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }


  // form validation
  isFormValid: boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);

    if (captchaResponse != null) {
      this.isFormValid = true;
    }
  }



  // submit data
  onSubmit() {

  }


}
