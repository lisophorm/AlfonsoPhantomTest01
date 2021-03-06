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
import {ErrorBoxComponent} from "../../shared/components/error-box/error-box.component";

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public displayError: boolean = false;
  public emailFormControl: FormControl = new FormControl('', []);
  public initialPage: number = 1;
  public items: Array<PhantomItem> = [];
  public pageOfItems: Array<PhantomItem> = [];
  public submitActive: boolean = true
  public urlCheckService: UrlCheckService = new UrlCheckService();
  public debounceTimer: any
  public spinnerVisible:boolean = false;

  @ViewChild('myPagination') paginationComponent: PaginationComponent = new PaginationComponent();
  @ViewChild('errorBox') errorBoxComponent: ErrorBoxComponent = new ErrorBoxComponent();

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
    console.log('checkField', value);
    // hides if empty
    if (value == '') {
      this.errorBoxComponent.hide();
      // regexp validation
    } else if (this.urlCheckService.validURL(value)) {
      this.errorBoxComponent.hide();
      // check for url
      clearInterval(this.debounceTimer);
      this.spinnerVisible=false;
      // simple and brutal debounce
      this.debounceTimer = setTimeout(() => {
        this.spinnerVisible=true;
        this.urlCheckService.urlExists(value).then(result => {
          this.spinnerVisible=false;
          console.log('url success', result)
          this.submitActive = !result;
          if (result) {
            this.errorBoxComponent.hide();
          } else {
            this.errorBoxComponent.show('This url does not exists');
          }
        }, fail => {
          this.spinnerVisible=false;
          console.log('url fail', fail);
          this.errorBoxComponent.show('This url does not exists');
          this.submitActive = true;
        })
      }, 1000)
    } else {
      this.errorBoxComponent.show('Please type a well formed URL');
    }

  }

  // delete an item.

  public deleteItem(id: any) {
    console.log('delete item', id);
    const index1 = this.pageOfItems.findIndex(item => {
      return item.id == id;
    })
    const index2 = this.items.findIndex(item => {
      return item.id == id;
    })
    this.pageOfItems.splice(index1, 1);
    this.items.splice(index2, 1)
    this.paginationComponent.setPage(this.bookMarkService.pageNumber);
  }


  submitURL(value: any) {
    console.log('submitURL', value)
    this.urlDataService.push(value);
    this.submitActive = true;
    this.router.navigate(['thankyou'], {queryParams: {url: value}})
  }

}
