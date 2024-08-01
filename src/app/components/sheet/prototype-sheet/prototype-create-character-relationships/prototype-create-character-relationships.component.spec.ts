import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeCreateCharacterRelationshipsComponent } from './prototype-create-character-relationships.component';

describe('PrototypeCreateCharacterRelationshipsComponent', () => {
  let component: PrototypeCreateCharacterRelationshipsComponent;
  let fixture: ComponentFixture<PrototypeCreateCharacterRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypeCreateCharacterRelationshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeCreateCharacterRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
