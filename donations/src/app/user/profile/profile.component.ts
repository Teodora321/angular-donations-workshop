import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/directives/password-match';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../error-styles.css']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  get currentUser() {
    return this.userService.currentUser;
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required,Validators.minLength(6)]]
      }, {
        validators: [passwordMatch]
      })
    });
  }

  ngOnInit() {
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/'])
  }

}
