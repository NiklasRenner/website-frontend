import {Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  services = [];
  rip = true;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.updateServices();
  }

  public updateServices() {
    if (this.rip) {
      this.apiService.getServices().subscribe(data => {
        this.services = data;
      });
    } else {
      this.services = [];
    }

    this.rip = !this.rip;
  }
}
