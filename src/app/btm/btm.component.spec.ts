import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtmComponent } from './btm.component';

describe('BtmComponent', () => {
  let component: BtmComponent;
  let fixture: ComponentFixture<BtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
