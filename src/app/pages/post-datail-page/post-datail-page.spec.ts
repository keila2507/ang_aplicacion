import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDatailPage } from './post-datail-page';

describe('PostDatailPage', () => {
  let component: PostDatailPage;
  let fixture: ComponentFixture<PostDatailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDatailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDatailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
