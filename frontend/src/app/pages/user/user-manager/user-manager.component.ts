import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { IUsers } from 'src/app/shared/interface/users.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent extends BaseComponent implements OnInit {
  private id: any = this.ActiveRoute.snapshot.paramMap.get('id');

  constructor(
    private ActiveRoute: ActivatedRoute,
    public location: Location,
    private fb: FormBuilder,
    private usersService: UsersService
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, [Validators.email]],
      jobtitle: ['', Validators.required],
      age: ['', Validators.required],
    });

    if (this.id) {
      this.getUserById();
    }
  }

  public async getUserById(): Promise<void> {
    const user: IUsers = await this.usersService.getById(this.id);
    this.form.patchValue(user);
  }

  public async submit(): Promise<void> {
    if (this.form.valid) return this.handleError('Complete all fields');

    try {
      if (this.id) {
        await this.usersService.update(this.id, this.form.value);
      } else {
        await this.usersService.create(this.form.value);
      }

      this.handleSuccess('Saved successfully');
      this.location.back();
    } catch (error) {
      this.handleError(error);
    }
  }

}
