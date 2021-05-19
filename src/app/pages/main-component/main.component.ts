import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UrlCheckService} from "../../core/services/url-check.service";
import {UrlDataService} from "../../core/services/url-data.service";
import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from "@angular/router";
import {PhantomItem} from "../../shared/interfaces/PhantomItem.interface";
import {PaginationComponent} from "../../shared/components/pagination-component/pagination.component";
import {BookMarkService} from "../../core/services/bookMark.service";

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public displayError: boolean = false;
  public inputFieldValue: string = '';
  public items: Array<PhantomItem> = [];
  public pageOfItems: Array<PhantomItem> = [];
  public submitActive: boolean = true
  public urlCheckService: UrlCheckService = new UrlCheckService();
  public initialPage: number = 1;

  public emailFormControl: FormControl = new FormControl('', []);

  @ViewChild('myPagination') paginationComponent: PaginationComponent = new PaginationComponent();

  constructor(public urlDataService: UrlDataService,
              public bookMarkService: BookMarkService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.items = this.urlDataService.urlList;
    this.initialPage = this.bookMarkService.pageNumber;
  }

  //
  // we store locally also the page number
  //

  bookMarkPage(event: number) {
    this.bookMarkService.pageNumber = event;
  }

  //
  // event thrown by the paginator in order to split/order the pages
  //

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    console.log('onchangepage', pageOfItems)
    this.pageOfItems = pageOfItems;
  }

  //
  // checks if the input is correct and the URL exists
  //

  checkField(value: any) {
    console.log('dd', this.inputFieldValue);
    this.urlCheckService.urlExists(this.inputFieldValue).then(result => {
      console.log('url success',result)
      this.submitActive = !result;
    }, fail => {
      console.log('url fail',fail)
      this.submitActive = true;
    })
  }

  submitURL() {
    this.urlDataService.push(this.inputFieldValue);
    this.submitActive = true;
    this.router.navigate(['thankyou'], {queryParams: {url: this.inputFieldValue}})
  }

  setError() {
    console.log('set error');
  }

}
