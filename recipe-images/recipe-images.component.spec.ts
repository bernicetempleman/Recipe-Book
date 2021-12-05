import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImagesComponent } from './recipe-images.component';

describe('RecipeImagesComponent', () => {
  let component: RecipeImagesComponent;
  let fixture: ComponentFixture<RecipeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
