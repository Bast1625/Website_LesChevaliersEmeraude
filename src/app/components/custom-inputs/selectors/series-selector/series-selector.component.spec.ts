import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSelectorComponent } from './series-selector.component';

describe('SeriesSelectorComponent', () => {
  let component: SeriesSelectorComponent;
  let fixture: ComponentFixture<SeriesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
