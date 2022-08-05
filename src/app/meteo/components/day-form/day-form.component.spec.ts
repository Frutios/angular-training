import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DayFormComponent } from './day-form.component';

describe('DayFormComponent', () => {
  let component: DayFormComponent;
  let fixture: ComponentFixture<DayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayFormComponent ],
      imports: [TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
