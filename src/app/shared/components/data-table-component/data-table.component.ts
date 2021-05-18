import {Component, OnInit} from '@angular/core';
import {UrlCheckService} from '../../../core/services/url-check.service';
import {UrlDataService} from '../../../core/services/url-data.service';

@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private urlCheckService: UrlCheckService,
              private urlDataService: UrlDataService) {
  }

  ngOnInit(): void {
  }

}
