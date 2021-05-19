import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  public emailFormControl: FormControl = new FormControl('', []);
  public inputFieldValue: string = '';
  @Output() change = new EventEmitter<any>(true);
  @Output() submitUrl = new EventEmitter<any>(true);
  @Input() disabled: boolean = true;
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
