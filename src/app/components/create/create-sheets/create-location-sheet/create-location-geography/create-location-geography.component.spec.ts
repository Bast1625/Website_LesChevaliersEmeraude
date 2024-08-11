import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationGeographyComponent } from './create-location-geography.component';

describe('CreateLocationGeographyComponent', () => {
  let component: CreateLocationGeographyComponent;
  let fixture: ComponentFixture<CreateLocationGeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLocationGeographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocationGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
