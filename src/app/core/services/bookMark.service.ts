import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {PhantomItem} from "../../shared/interfaces/PhantomItem.interface";

@Injectable({
  providedIn: 'root'
})

// bookmarks the page current number

export class BookMarkService {

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
    this.storage.set(this.STORAGE_KEY, this._pageNumber);
  }

  private _pageNumber: number = 0;

  private STORAGE_KEY = 'local_todolist_page_bookmark';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this._pageNumber = this.storage.get(this.STORAGE_KEY) || 0;
    console.log('bootstrap page number', this._pageNumber)
  }

}


