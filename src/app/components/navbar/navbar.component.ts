import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggle = true;

  signIn() {
    this.toggle = false;
  }

  signOut() {
    this.toggle = true;
  }
}
