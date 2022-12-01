import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { CodigoPage } from './codigo.page';
import { Storage } from '@ionic/storage-angular';

xdescribe('CodigoPage', () => {
  let component: CodigoPage;
  let fixture: ComponentFixture<CodigoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
