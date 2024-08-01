import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSheetCardComponent } from './base-sheet-card.component';

describe('BaseSheetCardComponent', () => {
  let component: BaseSheetCardComponent;
  let fixture: ComponentFixture<BaseSheetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSheetCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSheetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
