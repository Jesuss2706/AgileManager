import { Injectable } from '@angular/core';
import { IPriority } from '../interface/IdName.interface';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../core/base.component';

@Injectable({
  providedIn: 'root'
})
export class PriorityService extends BaseComponent {

  constructor(private http: HttpClient) { super() }

  public getAll(): Promise<IPriority[]> {
    const url: string = `${this.apiUrl}/priority`;
    return this.http.get<IPriority[]>(url).toPromise();
  }

  public getById(id: number): Promise<IPriority> {
    const url: string = `${this.apiUrl}/priority/${id}`;
    return this.http.get<IPriority>(url).toPromise();
  }

  public create(body: IPriority): Promise<any> {
    const url: string = `${this.apiUrl}/priority`;
    return this.http.post<any>(url, body).toPromise();
  }

  public update(id: number, body: IPriority): Promise<any> {
    const url: string = `${this.apiUrl}/priority/${id}`;
    return this.http.put<any>(url, body).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/priority/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

}
