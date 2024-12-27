import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IStatus, PrincipalNames } from 'src/app/shared/interface/IdName.interface';
import { StatusService } from 'src/app/shared/services/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent extends BaseComponent implements OnInit {
  public lists: IStatus[] = [];
  public principalName = PrincipalNames;

  constructor(
    public route: Router,
    public location: Location,
    private statusService: StatusService
  ) { super(); }

  ngOnInit(): void {
    this.getAll();
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.statusService.delete(id);
      await this.getAll();
      this.handleSuccess('Deleted successfully');
    } catch (error) {
      this.handleError(error);
    }
  }

  private async getAll(): Promise<void> {
    this.lists = (await this.statusService.getAll()).reverse();
  }

}
