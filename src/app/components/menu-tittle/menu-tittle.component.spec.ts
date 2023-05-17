import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTittleComponent } from './menu-tittle.component';

describe('MenuTittleComponent', () => {
  let component: MenuTittleComponent;
  let fixture: ComponentFixture<MenuTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTittleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
