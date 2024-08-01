import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeSheetComponent } from './prototype-sheet.component';

describe('PrototypeSheetComponent', () => {
  let component: PrototypeSheetComponent;
  let fixture: ComponentFixture<PrototypeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypeSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
