import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-decoder',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component implements OnInit {
  decoderForm: FormGroup;
  content = "";

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.decoderForm = this.formBuilder.group({
      data: ['', Validators.required]
    });
  }

  encode() {
    this.content = btoa(this.decoderForm.controls.data.value);
  }

  decode() {
    this.content = atob(this.decoderForm.controls.data.value);
  }
}
