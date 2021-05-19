import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {PhantomItem} from "../../shared/interfaces/PhantomItem.interface";

@Injectable({
  providedIn: 'root'
})

// service for storing the list of URL

export class UrlDataService {

  get urlList(): Array<PhantomItem> {
    return this._urlList;
  }

  set urlList(value: Array<PhantomItem>) {
    this._urlList = value;
  }

  private _urlList: Array<PhantomItem> = [];

  private STORAGE_KEY = 'local_todolist_phantom';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this._urlList = this.storage.get(this.STORAGE_KEY) || [];
    console.log('bootstrap url list', this._urlList)
  }

  public push(url: string): Array<PhantomItem> {
    const item: PhantomItem = {
      id: this.makeid(),
      label: url
    }
    this._urlList.push(item);
    this.storage.set(this.STORAGE_KEY, this._urlList);
    return this._urlList;
  }

  private makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}


