import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasavanagudiComponent } from './basavanagudi.component';

describe('BasavanagudiComponent', () => {
  let component: BasavanagudiComponent;
  let fixture: ComponentFixture<BasavanagudiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasavanagudiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasavanagudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
