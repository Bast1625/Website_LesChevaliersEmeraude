import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationSocialComponent } from './create-location-social.component';

describe('CreateLocationSocialComponent', () => {
  let component: CreateLocationSocialComponent;
  let fixture: ComponentFixture<CreateLocationSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLocationSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocationSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
