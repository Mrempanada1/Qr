import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { BasePage } from './base.page';

xdescribe('BasePage', () => {
  let component: BasePage;
  let fixture: ComponentFixture<BasePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('Debe mostrar informacion del registro de asistencia', () => {
    component.abrirRegistro('registro');
    fixture.detectChanges();

    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');

    expect( h2?.textContent).toContain('QRCode');
    expect( p?.textContent).toContain('Base de datos');
    
  });
});
