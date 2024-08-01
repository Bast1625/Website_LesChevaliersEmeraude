import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCardPropertyComponent } from './sheet-card-property.component';

describe('SheetCardPropertyComponent', () => {
  let component: SheetCardPropertyComponent;
  let fixture: ComponentFixture<SheetCardPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheetCardPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetCardPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
