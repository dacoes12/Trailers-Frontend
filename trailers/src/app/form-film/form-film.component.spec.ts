import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilmComponent } from './form-film.component';

describe('FormFilmComponent', () => {
  let component: FormFilmComponent;
  let fixture: ComponentFixture<FormFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
