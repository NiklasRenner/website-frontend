import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paste-show',
  templateUrl: './paste-show.component.html',
  styleUrls: ['./paste-show.component.css']
})
export class PasteShowComponent implements OnInit {
  content;
  url;
  id;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.url = this.apiService.createPasteUrl(this.id);
      this.apiService.getPaste(this.id).subscribe(data => {
        this.content = data;
      });
    });
  }

  navigateToRawPaste(){
    window.location.href = this.url;
  }
}
