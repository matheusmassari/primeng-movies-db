import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private api: ApiService) {}

  isLoading = false;

  ngOnInit(): void {}

  goToPage(adress: string) {
    
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate([`${adress}`]);
    }, 1500);
  }
}
