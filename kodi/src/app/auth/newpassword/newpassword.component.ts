import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {

  email: string;
  constructor(private route:  ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  conexion() {
    this.router.navigate(['login']);
  }

}
