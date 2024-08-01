import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeCreateCharacterIdentityComponent } from './prototype-create-character-identity.component';

describe('PrototypeCreateCharacterIdentityComponent', () => {
  let component: PrototypeCreateCharacterIdentityComponent;
  let fixture: ComponentFixture<PrototypeCreateCharacterIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypeCreateCharacterIdentityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeCreateCharacterIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
