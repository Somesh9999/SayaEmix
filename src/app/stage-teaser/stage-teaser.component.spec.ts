import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageTeaserComponent } from './stage-teaser.component';

describe('StageTeaserComponent', () => {
  let component: StageTeaserComponent;
  let fixture: ComponentFixture<StageTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
