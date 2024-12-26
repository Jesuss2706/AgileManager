import { Injectable } from '@angular/core';
import { IUsers } from '../interface/users.interface';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../core/base.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseComponent {

  constructor(private http: HttpClient) { super() }

  public getAll(): Promise<IUsers[]> {
    const url: string = `${this.apiUrl}/users`;
    return this.http.get<IUsers[]>(url).toPromise();
  }

  public getById(id: number): Promise<IUsers> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.get<IUsers>(url).toPromise();
  }

  public create(body: IUsers): Promise<any> {
    const url: string = `${this.apiUrl}/users`;
    return this.http.post<any>(url, body).toPromise();
  }

  public update(id: number, body: IUsers): Promise<any> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.put<any>(url, body).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

}
