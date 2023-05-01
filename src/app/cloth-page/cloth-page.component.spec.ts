import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothPageComponent } from './cloth-page.component';

describe('ClothPageComponent', () => {
  let component: ClothPageComponent;
  let fixture: ComponentFixture<ClothPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
