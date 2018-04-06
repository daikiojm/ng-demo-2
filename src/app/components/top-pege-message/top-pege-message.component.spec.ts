import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPegeMessageComponent } from './top-pege-message.component';

describe('TopPegeMessageComponent', () => {
  let component: TopPegeMessageComponent;
  let fixture: ComponentFixture<TopPegeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPegeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPegeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
