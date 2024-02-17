import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnListComponent } from './ann-list.component';

describe('AnnListComponent', () => {
  let component: AnnListComponent;
  let fixture: ComponentFixture<AnnListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnListComponent]
    });
    fixture = TestBed.createComponent(AnnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
