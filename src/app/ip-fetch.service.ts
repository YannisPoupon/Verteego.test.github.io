import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpFetchService {
  constructor() {}

  fetchIp() {
    return new Observable((observer) => {
      fetch('https://api.ipify.org?format=json')
        .then((response) => response.json())
        .then((json) => {
          observer.next(json);
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }
}
