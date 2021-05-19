import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent implements OnInit {

  @Input() message: string = 'error';

  public visible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public show(message: string) {
    this.visible = true;
    this.message = message;
  }

  public hide() {
    this.visible = false;
  }

}
