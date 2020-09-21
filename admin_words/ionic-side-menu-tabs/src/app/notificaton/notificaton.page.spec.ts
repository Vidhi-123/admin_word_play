import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificatonPage } from './notificaton.page';

describe('NotificatonPage', () => {
  let component: NotificatonPage;
  let fixture: ComponentFixture<NotificatonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificatonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificatonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
