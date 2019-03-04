import {Component} from '@angular/core';
import {AuthenticationService} from '@app/services/authentication.service';
import {User} from '@app/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: User = null;
  navbarOpen = false;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.user = data;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.authService.logout();
    this.goHome();
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      scroll(0, 0);
    });
  }
}
