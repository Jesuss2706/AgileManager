import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNameManagerComponent } from './id-name-manager.component';

describe('IdNameManagerComponent', () => {
  let component: IdNameManagerComponent;
  let fixture: ComponentFixture<IdNameManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdNameManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdNameManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
