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
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
  }

  clearErrors() {
    this.errorMessage = ""
  }

  ngOnInit() {
    this.pasteForm = this.formBuilder.group({
      data: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.apiService.postPaste(this.pasteForm.controls.data.value).subscribe(
      data => {
        const parts = data.split('/');
        const id = parts[parts.length - 1].trim();
        this.router.navigate(['/paste/' + id]);
      }, error => {
        this.errorMessage = "Input too long"; //TODO figure out how to get real error here, right now getting "OK" as error object.
      })
  }
}
