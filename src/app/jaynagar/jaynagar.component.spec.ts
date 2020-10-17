import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaynagarComponent } from './jaynagar.component';

describe('JaynagarComponent', () => {
  let component: JaynagarComponent;
  let fixture: ComponentFixture<JaynagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaynagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaynagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
