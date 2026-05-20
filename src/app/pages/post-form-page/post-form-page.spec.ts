import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormPage } from './post-form-page';

describe('PostFormPage', () => {
  let component: PostFormPage;
  let fixture: ComponentFixture<PostFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostFormPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
