import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeSelectorComponent } from './volume-selector.component';

describe('VolumeSelectorComponent', () => {
  let component: VolumeSelectorComponent;
  let fixture: ComponentFixture<VolumeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
