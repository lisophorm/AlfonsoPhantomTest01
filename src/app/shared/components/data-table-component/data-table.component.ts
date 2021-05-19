import {Component, Input, OnInit} from '@angular/core';
import {UrlCheckService} from '../../../core/services/url-check.service';
import {UrlDataService} from '../../../core/services/url-data.service';
import {PhantomItem} from "../../interfaces/PhantomItem.interface";

@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() entries: Array<PhantomItem> = [];

  constructor(private urlCheckService: UrlCheckService,
              private urlDataService: UrlDataService) {
  }

  ngOnInit(): void {
  }

}
