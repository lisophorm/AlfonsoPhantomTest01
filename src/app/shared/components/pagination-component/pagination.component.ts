import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

//
// Pagination components. Re-organise a list according to pagination parameters
// took part of the code from an online sample and I converted it into a component
//
//

export class PaginationComponent implements OnInit, OnChanges {
  @Input() items: Array<any> = [];
  @Output() changePage = new EventEmitter<any>(true);
  @Output() pageNumberChange = new EventEmitter<number>(true);
  @Input() initialPage = 1;
  // only 10 instead of 20 just to accelerate testing
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager: any = {};

  ngOnInit() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  // the core pagination function: it returns only a slice of the original array, in according to the pagination

  setPage(page: number) {
    console.log('setpage', page)
    // get new pager object for specified page
    this.pager = this.paginate(this.items.length, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    let pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
    this.pageNumberChange.emit(page);
  }


  private paginate(totalItems: number, currentPage: number, pageSize: number, maxPages: number) {
    if (currentPage === void 0) {
      currentPage = 1;
    }
    if (pageSize === void 0) {
      pageSize = 10;
    }
    if (maxPages === void 0) {
      maxPages = 10;
    }
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) {
      return startPage + i;
    });
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
