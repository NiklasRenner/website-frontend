import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  services = [];
  gitIcon = faGithub;
  linkedInIcon = faLinkedin;
  mailIcon = faAt;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getServices().subscribe(data => {
      this.services = data;
    });
  }
}
