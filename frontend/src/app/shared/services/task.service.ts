import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from '../core/base.component';
import { ITask } from 'src/app/shared/interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseComponent {

  constructor(private http: HttpClient) { super() }

  public getAll(): Promise<ITask[]> {
    const url: string = `${this.apiUrl}/task`;
    return this.http.get<ITask[]>(url).toPromise();
  }

  public getById(id: number): Promise<ITask> {
    const url: string = `${this.apiUrl}/task/${id}`;
    return this.http.get<ITask>(url).toPromise();
  }

  public create(body: ITask): Promise<any> {
    const url: string = `${this.apiUrl}/task`;
    return this.http.post<any>(url, body).toPromise();
  }

  public update(id: number, body: ITask): Promise<any> {
    const url: string = `${this.apiUrl}/task/${id}`;
    return this.http.put<any>(url, body).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/task/${id}`;
    return this.http.delete<any>(url).toPromise();
  }

}
