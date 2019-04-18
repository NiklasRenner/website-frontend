import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = environment.backendUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getServices(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiURL}/services`);
  }

  public getLocked(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiURL}/locked`);
  }

  public postPaste(data: string): Observable<string> {
    return this.httpClient.post(`${this.apiURL}/p`, data, {responseType: 'text'});
  }

  public getPaste(id: string): Observable<string> {
    return this.httpClient.get(this.createPasteUrl(id), {responseType: 'text'});
  }

  public createPasteUrl(id: string): string {
    return `${this.apiURL}/p/${id}`;
  }
}
