import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnItemComponent } from './ann-item.component';

describe('AnnItemComponent', () => {
  let component: AnnItemComponent;
  let fixture: ComponentFixture<AnnItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnItemComponent]
    });
    fixture = TestBed.createComponent(AnnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
