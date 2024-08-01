import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeCreateCharacterTimelineComponent } from './prototype-create-character-timeline.component';

describe('PrototypeCreateCharacterTimelineComponent', () => {
  let component: PrototypeCreateCharacterTimelineComponent;
  let fixture: ComponentFixture<PrototypeCreateCharacterTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypeCreateCharacterTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeCreateCharacterTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
