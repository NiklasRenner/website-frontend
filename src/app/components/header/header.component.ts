import {Component} from '@angular/core';
import {AuthenticationService} from '@app/services/authentication.service';
import {User} from '@app/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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

  scrollIntoView(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      scroll({left: 0, top: 0, behavior: 'smooth'});
    });
  }
}
