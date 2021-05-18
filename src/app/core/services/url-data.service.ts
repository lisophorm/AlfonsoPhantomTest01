import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UrlDataService {

  get urlList(): Array<string> {
    return this._urlList;
  }

  set urlList(value: Array<string>) {
    this._urlList = value;
  }

  private _urlList: Array<string> = [];

  private STORAGE_KEY = 'local_todolist';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this._urlList = this.storage.get(this.STORAGE_KEY) || [];
  }

  public push(url: string): Array<string> {
    this._urlList.push(url);
    this.storage.set(this.STORAGE_KEY, this._urlList);
    return this._urlList;
  }
}


