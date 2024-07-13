import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseKnightsViewComponent } from './browse-knights-view.component';

describe('BrowseKnightsViewComponent', () => {
  let component: BrowseKnightsViewComponent;
  let fixture: ComponentFixture<BrowseKnightsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseKnightsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseKnightsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
