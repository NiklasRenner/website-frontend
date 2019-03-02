import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://dev.renner.id/services';

  constructor(private httpClient: HttpClient) {
  }

  public getServices(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL);
  }
}
