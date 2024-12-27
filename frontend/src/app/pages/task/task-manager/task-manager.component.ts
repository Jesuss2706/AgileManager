import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { ITask } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent extends BaseComponent implements OnInit {

  private id: any = this.ActiveRoute.snapshot.paramMap.get('id');


  constructor(

    private ActiveRoute: ActivatedRoute,
    public Location: Location,
    private fb: FormBuilder,
    private TaskService: TaskService
  ) {super() }

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

    if(this.id){
      this.getTaskById();
    }
  }

  public async getTaskById(): Promise<void> {
    const task: ITask = await this.TaskService.getById(this.id);
    this.form.patchValue(task);
  }

  public async submit(): Promise<void> {
    if(this.form.valid) return this.handleError('Complete all fields');

    try{
      if(this.id){
        await this.TaskService.update(this.id, this.form.value);
      }else{
        await this.TaskService.create(this.form.value);
      }

      this.handleSuccess('Task created successfully');
      this.Location.back();
    }catch(error){
      this.handleError(error);
    }
  }

}
