import {Component, OnInit} from '@angular/core';
import {ApiService} from '@app/services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paste-show',
  templateUrl: './paste-show.component.html',
  styleUrls: ['./paste-show.component.css']
})
export class PasteShowComponent implements OnInit {
  content = '';
  contentLength = 0;
  id = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  rows(): number {
    return this.contentLength > 20 ? this.contentLength : 20;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.apiService.getPaste(this.id).subscribe(data => {
        this.content = data;
        this.contentLength = this.content.split('\n').length;
      });
    });
  }
}
