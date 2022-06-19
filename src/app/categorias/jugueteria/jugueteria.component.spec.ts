import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteriaComponent } from './jugueteria.component';

describe('JugueteriaComponent', () => {
  let component: JugueteriaComponent;
  let fixture: ComponentFixture<JugueteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
