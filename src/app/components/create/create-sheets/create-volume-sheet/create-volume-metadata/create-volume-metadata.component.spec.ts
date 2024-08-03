import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVolumeMetadataComponent } from './create-volume-metadata.component';

describe('CreateVolumeMetadataComponent', () => {
  let component: CreateVolumeMetadataComponent;
  let fixture: ComponentFixture<CreateVolumeMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVolumeMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVolumeMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
