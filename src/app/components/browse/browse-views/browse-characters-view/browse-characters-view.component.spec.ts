import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCharactersViewComponent } from './browse-characters-view.component';

describe('BrowseCharactersViewComponent', () => {
  let component: BrowseCharactersViewComponent;
  let fixture: ComponentFixture<BrowseCharactersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCharactersViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseCharactersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
