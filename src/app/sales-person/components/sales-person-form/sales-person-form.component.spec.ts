import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonFormComponent } from './sales-person-form.component';

describe('SalesPersonFormComponent', () => {
  let component: SalesPersonFormComponent;
  let fixture: ComponentFixture<SalesPersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
