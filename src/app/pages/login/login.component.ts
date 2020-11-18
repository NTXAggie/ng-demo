import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private loaderService: LoaderService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderService.endLoading();
    }, 1500);
  }

  login(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.authService.login(val.password).subscribe(res => {
        if (res) {
          this.router.navigate(['/state-info']);
        }
      });
    } else {
      alert('wrong!');
    }
  }

}
