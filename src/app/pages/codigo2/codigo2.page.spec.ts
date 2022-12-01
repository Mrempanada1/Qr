import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Codigo2Page } from './codigo2.page';
import { Storage } from '@ionic/storage-angular';

xdescribe('Codigo2Page', () => {
  let component: Codigo2Page;
  let fixture: ComponentFixture<Codigo2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Codigo2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Codigo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
