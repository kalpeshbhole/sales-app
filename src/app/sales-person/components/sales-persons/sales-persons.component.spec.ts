import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonsComponent } from './sales-persons.component';

describe('SalesPersonsComponent', () => {
  let component: SalesPersonsComponent;
  let fixture: ComponentFixture<SalesPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
