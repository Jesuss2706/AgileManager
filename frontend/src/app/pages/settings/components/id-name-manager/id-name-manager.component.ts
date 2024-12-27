import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/shared/core/base.component";
import { PrincipalNames } from "src/app/shared/interface/IdName.interface";
import { PriorityService } from "src/app/shared/services/priority.service";
import { StatusService } from "src/app/shared/services/status.service";

@Component({
  selector: "app-id-name-manager",
  templateUrl: "./id-name-manager.component.html",
  styleUrls: ["./id-name-manager.component.scss"],
})
export class IdNameManagerComponent extends BaseComponent implements OnInit {
  @Input() id: any = null;
  @Input() title: string = "";
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() onReload: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private StatusService: StatusService,
    private priorityService: PriorityService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", Validators.required],
    });

    if (this.id) {
      this.getValuesForm();
    }
  }

  private async getValuesForm(): Promise<void> {
    if (this.title === PrincipalNames.First) {
      const status = await this.StatusService.getById(this.id);
      this.form.patchValue(status);
    } else if (this.title === PrincipalNames.Second) {
      const priority = await this.priorityService.getById(this.id);
      this.form.patchValue(priority);
    }
  }

  public async submit(): Promise<void> {
    try {
      if (this.title === PrincipalNames.First) {
        this.id
          ? await this.StatusService.update(this.id, this.form.value)
          : await this.StatusService.create(this.form.value);
      } else if (this.title === PrincipalNames.Second) {
        this.id
          ? await this.priorityService.update(this.id, this.form.value)
          : await this.priorityService.create(this.form.value);
      }

      this.closeModal.emit();
      this.onReload.emit();
    } catch (error) {
      this.handleError(error);
    }
  }
}
