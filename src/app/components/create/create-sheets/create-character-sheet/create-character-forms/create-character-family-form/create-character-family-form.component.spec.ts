import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterFamilyFormComponent } from './create-character-family-form.component';

describe('CreateCharacterFamilyFormComponent', () => {
  let component: CreateCharacterFamilyFormComponent;
  let fixture: ComponentFixture<CreateCharacterFamilyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterFamilyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterFamilyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
