import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseLocationsViewComponent } from './browse-locations-view.component';

describe('BrowseLocationsViewComponent', () => {
  let component: BrowseLocationsViewComponent;
  let fixture: ComponentFixture<BrowseLocationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseLocationsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseLocationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
