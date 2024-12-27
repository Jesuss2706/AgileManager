import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IPriority, IStatus } from 'src/app/shared/interface/IdName.interface';
import { ITask } from 'src/app/shared/interface/task.interface';
import { IUsers } from 'src/app/shared/interface/users.interface';
import { PriorityService } from 'src/app/shared/services/priority.service';
import { StatusService } from 'src/app/shared/services/status.service';
import { TaskService } from 'src/app/shared/services/task.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent extends BaseComponent implements OnInit {

  private id: any = this.ActiveRoute.snapshot.paramMap.get('id');
  public status: IStatus[] = [];
  public priorities: IPriority[] = [];
  public users: IUsers[] = [];

  constructor(
    private ActiveRoute: ActivatedRoute,
    public Location: Location,
    private fb: FormBuilder,
    private TaskService: TaskService,
    private usersService: UsersService,
    private statusService: StatusService,
    private priorityService: PriorityService,
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      user_creator: ['', Validators.required],
      status_idstatus: ['', Validators.required],
      Priority_idPriority: ['', Validators.required],
      User_idUser: ['', Validators.required],
    })

    if (this.id) {
      this.getTaskById();
    }

    this.onReload();
  }

  private async onReload(): Promise<void> {
    this.getAllUsers();
    this.getAllPriorities();
    this.getAllStatus();
  }

  private async getAllUsers(): Promise<void> {
    this.users = (await this.usersService.getAll()).reverse();
  }

  private async getAllPriorities(): Promise<void> {
    this.priorities = (await this.priorityService.getAll()).reverse();
  }

  private async getAllStatus(): Promise<void> {
    this.status = (await this.statusService.getAll()).reverse();
  }

  private async getTaskById(): Promise<void> {
    const task: ITask = await this.TaskService.getById(this.id);
    this.form.patchValue({
      name: task.name,
      description: task.description,
      start_date: (new Date(task.start_date)).toISOString().split('T')[0],
      end_date: (new Date(task.end_date)).toISOString().split('T')[0],
      user_creator: task.user_creator,
      status_idstatus: task.status_idstatus,
      Priority_idPriority: task.Priority_idPriority,
      User_idUser: task.User_idUser,
    });
  }

  public async submit(): Promise<void> {
    if (!this.form.valid) return this.handleError('Complete all fields');

    try {
      if (this.id) {
        await this.TaskService.update(this.id, this.form.value);
      } else {
        await this.TaskService.create(this.form.value);
      }

      this.handleSuccess('Task created successfully');
      this.Location.back();
    } catch (error) {
      this.handleError(error);
    }
  }

}
