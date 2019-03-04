import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  services = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe(data => {
      this.services = data;
    });
  }
}
