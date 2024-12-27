import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IPriority } from 'src/app/shared/interface/IdName.interface';
import { PriorityService } from 'src/app/shared/services/priority.service';
import { PrincipalNames } from 'src/app/shared/interface/IdName.interface';


@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent extends BaseComponent implements OnInit {

  public lists: IPriority[] = [];
  public principalName = PrincipalNames;

  constructor(
    public route: Router,
    public location: Location,
    public priorityService: PriorityService
  ) { super(); }

  ngOnInit(): void {
    this.getAll();
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.priorityService.delete(id);
      await this.getAll();
      this.handleSuccess('Deleted successfully');
    } catch (error) {
      this.handleError(error);
    }
  }

  private async getAll(): Promise<void> {
    this.lists = (await this.priorityService.getAll()).reverse();
  }
}
