import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { TaskService } from 'src/app/shared/services/task.service';
import { ITask } from 'src/app/shared/interface/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent extends BaseComponent implements OnInit {

  public tasks: ITask[];

  constructor(
    public taskService: TaskService,
    public location: Location,
    public route: Router,
  ) {super()}

  ngOnInit(): void {
    this.getAll();
  }

  public async delete(id: number): Promise<void>{
    try{
      await this.taskService.delete(id);
      await this.getAll();
      this.handleSuccess('Task deleted successfully');
    }catch(error){
      this.handleError(error);
    }
  }

  private async getAll(): Promise<void> {
    this.tasks = (await this.taskService.getAll()).reverse();
  }
}
