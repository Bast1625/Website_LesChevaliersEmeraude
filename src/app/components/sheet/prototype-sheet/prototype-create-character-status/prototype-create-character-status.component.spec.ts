import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeCreateCharacterStatusComponent } from './prototype-create-character-status.component';

describe('PrototypeCreateCharacterStatusComponent', () => {
  let component: PrototypeCreateCharacterStatusComponent;
  let fixture: ComponentFixture<PrototypeCreateCharacterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypeCreateCharacterStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeCreateCharacterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
