import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IUsers } from 'src/app/shared/interface/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit {
  public lists: IUsers[] = [];

  constructor(
    public route: Router,
    public location: Location,
    private usersService: UsersService
  ) { super(); }

  ngOnInit(): void {
    this.getAll();
  }

  public async delete(id: number): Promise<void> {
    try {
      await this.usersService.delete(id);
      await this.getAll();
      this.handleSuccess('Deleted successfully');
    } catch (error) {
      this.handleError(error);
    }
  }

  private async getAll(): Promise<void> {
    this.lists = (await this.usersService.getAll()).reverse();
  }
}
