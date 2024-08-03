import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolumeSheetComponent } from './create-volume-sheet.component';

describe('CreateVolumeSheetComponent', () => {
  let component: CreateVolumeSheetComponent;
  let fixture: ComponentFixture<CreateVolumeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVolumeSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVolumeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
