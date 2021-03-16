import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDisplayComponent } from './ip-display.component';

describe('IpDisplayComponent', () => {
  let component: IpDisplayComponent;
  let fixture: ComponentFixture<IpDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
