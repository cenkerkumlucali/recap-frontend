import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCategoryComponent } from './brand-category.component';

describe('BrandCategoryComponent', () => {
  let component: BrandCategoryComponent;
  let fixture: ComponentFixture<BrandCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
