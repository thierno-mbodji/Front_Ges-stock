import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonsActionComponent } from './bouttons-action.component';

describe('BouttonsActionComponent', () => {
  let component: BouttonsActionComponent;
  let fixture: ComponentFixture<BouttonsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouttonsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
