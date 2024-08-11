import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationSheetComponent } from './create-location-sheet.component';

describe('CreateLocationSheetComponent', () => {
  let component: CreateLocationSheetComponent;
  let fixture: ComponentFixture<CreateLocationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLocationSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
