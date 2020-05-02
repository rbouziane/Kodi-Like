import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

    onSubmit(form: NgForm) {
      const email = form.value['email'];
      this.authService.sendPasswordResetEmail(email);
      this.router.navigate(['newpassword', email]);
    }

    anuller() {
      this.router.navigate(['login']);
    }
}
