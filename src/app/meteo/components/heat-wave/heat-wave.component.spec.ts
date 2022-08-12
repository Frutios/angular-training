import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatWaveComponent } from './heat-wave.component';

describe('HeatWaveComponent', () => {
  let component: HeatWaveComponent;
  let fixture: ComponentFixture<HeatWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatWaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
