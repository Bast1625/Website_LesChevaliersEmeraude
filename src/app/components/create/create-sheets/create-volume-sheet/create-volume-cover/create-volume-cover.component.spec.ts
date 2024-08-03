import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolumeCoverComponent } from './create-volume-cover.component';

describe('CreateVolumeCoverComponent', () => {
  let component: CreateVolumeCoverComponent;
  let fixture: ComponentFixture<CreateVolumeCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVolumeCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVolumeCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
