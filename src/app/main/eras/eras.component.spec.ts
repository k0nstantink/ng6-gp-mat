import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasComponent } from './eras.component';

describe('ErasComponent', () => {
  let component: ErasComponent;
  let fixture: ComponentFixture<ErasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
