import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightCardComponent } from './knight-card.component';

describe('KnightCardComponent', () => {
  let component: KnightCardComponent;
  let fixture: ComponentFixture<KnightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnightCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
