import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewuserPage } from './viewuser.page';

describe('ViewuserPage', () => {
  let component: ViewuserPage;
  let fixture: ComponentFixture<ViewuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
