import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterStatusFormComponent } from './create-character-status-form.component';

describe('CreateCharacterStatusFormComponent', () => {
  let component: CreateCharacterStatusFormComponent;
  let fixture: ComponentFixture<CreateCharacterStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterStatusFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
