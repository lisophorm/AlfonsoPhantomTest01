import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCheckService {

  constructor() {
  }

  // check url for both syntax and http
  // TODO return different kind of errors
  // TODO debouncing

  public urlExists(url: string) {
    if (this.validURL(url)) {
      return fetch(url, {mode: "no-cors"})
        .then(res => {
          return Promise.resolve(true)
        }, err => {
          return Promise.reject(false)
        })
        .catch(err => false)
    } else {
      return Promise.reject(false)
    }

  }

  public validURL(str: string) {
    var pattern = new RegExp('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', 'gi'); // fragment locator
    return !!pattern.test(str);
  }

}
