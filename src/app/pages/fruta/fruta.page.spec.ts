import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutaPage } from './fruta.page';

describe('FrutaPage', () => {
  let component: FrutaPage;
  let fixture: ComponentFixture<FrutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
