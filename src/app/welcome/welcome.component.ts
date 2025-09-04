import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone:false
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  startApp() {
    console.log('Tapped — starting app...');
    // this.router.navigate(['/home']);
    this.router.navigate(['/anatomy']);
  }
}
