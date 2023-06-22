import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Footer criado', () => {
    expect(component).toBeTruthy();
  });
  it('Tem um h3 escrito Kaio Oliveira Portfólio', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Kaio Oliveira Portfólio');
  });

  it('Tem um p escrito Obrigado por visitar meu Portfólio pessoal.', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Obrigado por visitar meu Portfólio pessoal.');
  });
  it('Tem um h3 escrito Links Rápidos', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Links Rápidos');
  });
  it('Tem um a escrito Sobre', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Sobre');
  });
  it('Tem um a escrito Skills', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Skills');
  });
  it('Tem um a escrito Formação', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Formação');
  });
  it('Tem um a escrito Projetos', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Projetos');
  });
  it('Tem um a escrito Contato', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Contato');
  });
  it('Tem um h3 escrito Entre em Contato', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('Entre em Contato');
  });
  it('Tem um p com o número de telefone para contato', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('79 98826-1410');
  });
  it('Tem um p com o email para contato', () => {
    const titleElement = fixture.nativeElement.querySelector('.footer');
    expect(titleElement.textContent).toContain('kaio.ruan@souunit.com.br');
  });
});