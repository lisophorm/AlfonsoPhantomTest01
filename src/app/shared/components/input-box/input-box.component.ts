import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ErrorBoxComponent} from "../error-box/error-box.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  @Input() disabled: boolean = true;
  @Input() spinnerVisible:boolean = false;
  @Output() change = new EventEmitter<any>(true);
  @Output() submitUrl = new EventEmitter<any>(true);
  public emailFormControl: FormControl = new FormControl('', []);
  public inputFieldValue: string = '';
  public submitActive: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkField() {
    this.change.emit(this.inputFieldValue);
  }

  submitURL() {
    this.submitUrl.emit(this.inputFieldValue);
  }

}
