import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCategoryComponent } from './color-category.component';

describe('ColorCategoryComponent', () => {
  let component: ColorCategoryComponent;
  let fixture: ComponentFixture<ColorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
