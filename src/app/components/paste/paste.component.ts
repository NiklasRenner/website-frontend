import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '@app/services/api.service';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css']
})
export class PasteComponent implements OnInit {
  pasteForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.pasteForm = this.formBuilder.group({
      data: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.apiService.postPaste(this.pasteForm.controls.data.value).subscribe(data => {
      const parts = data.split('/');
      const id = parts[parts.length - 1];
      this.router.navigate(['/paste/' + id]);
    });
  }
}
