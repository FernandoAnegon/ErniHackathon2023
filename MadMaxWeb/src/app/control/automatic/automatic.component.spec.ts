import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticComponent } from './automatic.component';

describe('AutomaticComponent', () => {
  let component: AutomaticComponent;
  let fixture: ComponentFixture<AutomaticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomaticComponent]
    });
    fixture = TestBed.createComponent(AutomaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
