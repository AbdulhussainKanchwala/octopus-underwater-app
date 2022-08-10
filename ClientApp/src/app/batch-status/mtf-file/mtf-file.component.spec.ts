import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtfFileComponent } from './mtf-file.component';

describe('MtfFileComponent', () => {
  let component: MtfFileComponent;
  let fixture: ComponentFixture<MtfFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtfFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtfFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
