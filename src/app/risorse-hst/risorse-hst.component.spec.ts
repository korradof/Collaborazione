import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisorseHstComponent } from './risorse-hst.component';

describe('RisorseHstComponent', () => {
  let component: RisorseHstComponent;
  let fixture: ComponentFixture<RisorseHstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisorseHstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RisorseHstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
