import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCardComponent } from './sheet-card.component';

describe('SheetCardComponent', () => {
  let component: SheetCardComponent;
  let fixture: ComponentFixture<SheetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
