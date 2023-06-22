import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Education criado', () => {
    expect(component).toBeTruthy();
  });
  it('Tem um h1 escrito Minha Formação', () => {
    const titleElement = fixture.nativeElement.querySelector('.education');
    expect(titleElement.textContent).toContain('Minha Formação');
  });
  it('Tem um h3 escrito Desenvolvimento Web Fullstack', () => {
    const titleElement = fixture.nativeElement.querySelector('.content');
    expect(titleElement.textContent).toContain('Desenvolvimento Web Fullstack');
  });
  it('Tem um p com um texto e uma parte escrita O programa conta com mais de 1.500', () => {
    const titleElement = fixture.nativeElement.querySelector('.content');
    expect(titleElement.textContent).toContain('O programa conta com mais de 1.500');
  });
  it('Tem um h4 escrito 2022-2023 | Finalizado', () => {
    const titleElement = fixture.nativeElement.querySelector('.content');
    expect(titleElement.textContent).toContain('2022-2023 | Finalizado');
  });
});

