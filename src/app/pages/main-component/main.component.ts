import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public emailFormControl: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    console.log('main forward');
  }


}
