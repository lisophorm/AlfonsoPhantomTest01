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
    // set the default values if first time
    this._urlList = this.storage.get(this.STORAGE_KEY) || [];
  }

  public push(url: string): Array<PhantomItem> {
    // I have added an ID so in future we can manage more easily the list (delete, edit etc.)
    const item: PhantomItem = {
      id: this.makeid(),
      label: url
    }
    this._urlList.push(item);
    this.storage.set(this.STORAGE_KEY, this._urlList);
    return this._urlList;
  }

  // creates alphanumeric ID

  private makeid():string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

}


