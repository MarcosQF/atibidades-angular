import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestranteList } from './palestrante-list';

describe('PalestranteList', () => {
  let component: PalestranteList;
  let fixture: ComponentFixture<PalestranteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalestranteList],
    }).compileComponents();

    fixture = TestBed.createComponent(PalestranteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
