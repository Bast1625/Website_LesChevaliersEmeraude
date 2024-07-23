import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterIdentityFormComponent } from './create-character-identity-form.component';

describe('CreateCharacterIdentityFormComponent', () => {
  let component: CreateCharacterIdentityFormComponent;
  let fixture: ComponentFixture<CreateCharacterIdentityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterIdentityFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterIdentityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
