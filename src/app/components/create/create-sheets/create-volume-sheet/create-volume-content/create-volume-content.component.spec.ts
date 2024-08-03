import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolumeContentComponent } from './create-volume-content.component';

describe('CreateVolumeContentComponent', () => {
  let component: CreateVolumeContentComponent;
  let fixture: ComponentFixture<CreateVolumeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVolumeContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVolumeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
