import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/services/api.service';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.css']
})
export class LockedComponent implements OnInit {
  services = null;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getLocked().subscribe(data => {
      this.services = data;
    });
  }
}
