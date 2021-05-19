import {Component, OnInit} from '@angular/core';
import {UrlDataService} from "../../core/services/url-data.service";
import {ActivatedRoute} from "@angular/router";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-thank-you-component',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  public addedUrl: string = ''

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log('params', params); // { order: "popular" }
          if (params.url) {
            this.addedUrl = params.url;
          }
        }
      );
  }

}
