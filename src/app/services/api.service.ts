import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://dev.renner.id';

  constructor(private httpClient: HttpClient) {
  }

  public getServices(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL + '/services');
  }

  public getLocked(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiURL + '/locked');
  }

  public postPaste(data: string): Observable<string> {
    return this.httpClient.post(this.apiURL + '/p', data, {responseType: 'text'});
  }

  public getPaste(id: string): Observable<string> {
    return this.httpClient.get(this.apiURL + '/p/' + id, {responseType: 'text'});
  }
}
