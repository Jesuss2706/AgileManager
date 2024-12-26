import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({ template: '' })
export class BaseComponent {

  public form!: FormGroup;
  public apiUrl = environment.app.apiBaseUrl;

  //modal
  selected$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  modalDisplay$: BehaviorSubject<any> = new BehaviorSubject<any>("none");
  subscription!: Subscription;

  constructor() { }

  getControl(control: string, form: FormGroup = this.form): AbstractControl {
    return form.controls[control];
  }

  clearHistory() {
    localStorage.removeItem('token');
    sessionStorage.clear();
    localStorage.clear();
  }

  handleError(error: string) {
    Swal.fire({ title: 'Error!', text: error, icon: 'warning' });
  }

  async handleSuccess(message: string) {
    Swal.fire({ title: 'Success!', text: message, icon: 'success' });
  }

  openModal(event: any) {
    this.selected$.next({ event })
    this.modalDisplay$.next("block");
  }

  closeModalMethod() {
    this.selected$.next(null);
    this.modalDisplay$.next("none");
    this.subscription.unsubscribe();
  }
}
