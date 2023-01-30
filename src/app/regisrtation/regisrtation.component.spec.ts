import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisrtationComponent } from './regisrtation.component';

describe('RegisrtationComponent', () => {
  let component: RegisrtationComponent;
  let fixture: ComponentFixture<RegisrtationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisrtationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisrtationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
