import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SunComponent } from './sun.component';

describe('SunComponent', () => {
  let component: SunComponent;
  let fixture: ComponentFixture<SunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
