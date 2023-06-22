import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFormComponent } from './welcome-form.component';

describe('WelcomeFormComponent', () => {
  let component: WelcomeFormComponent;
  let fixture: ComponentFixture<WelcomeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeFormComponent]
    });
    fixture = TestBed.createComponent(WelcomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
