import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeImagesComponent } from './cake-images.component';

describe('CakeImagesComponent', () => {
  let component: CakeImagesComponent;
  let fixture: ComponentFixture<CakeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
