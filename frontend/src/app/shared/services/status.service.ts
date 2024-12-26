import { Injectable } from '@angular/core';
import { IStatus } from '../interface/IdName.interface';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../core/base.component';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends BaseComponent {

  constructor(private http: HttpClient) { super() }

  public getAll(): Promise<IStatus[]> {
    const url: string = `${this.apiUrl}/status`;
    return this.http.get<IStatus[]>(url).toPromise();
  }

  public getById(id: number): Promise<IStatus> {
    const url: string = `${this.apiUrl}/status/${id}`;
    return this.http.get<IStatus>(url).toPromise();
  }

  public create(body: IStatus): Promise<any> {
    const url: string = `${this.apiUrl}/status`;
    return this.http.post<any>(url, body).toPromise();
  }

  public update(id: number, body: IStatus): Promise<any> {
    const url: string = `${this.apiUrl}/status/${id}`;
    return this.http.put<any>(url, body).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/status/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

}
