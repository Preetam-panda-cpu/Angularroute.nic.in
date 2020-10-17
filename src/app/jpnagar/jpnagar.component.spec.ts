import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpnagarComponent } from './jpnagar.component';

describe('JpnagarComponent', () => {
  let component: JpnagarComponent;
  let fixture: ComponentFixture<JpnagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpnagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
