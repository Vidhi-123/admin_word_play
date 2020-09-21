import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewwordPage } from './viewword.page';

describe('ViewwordPage', () => {
  let component: ViewwordPage;
  let fixture: ComponentFixture<ViewwordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewwordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewwordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
