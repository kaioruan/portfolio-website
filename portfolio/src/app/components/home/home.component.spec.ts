import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Home criado', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar h2 Eu sou Kaio Oliveira', () => {
    const titleElement = fixture.nativeElement.querySelector('.elements');
    expect(titleElement.textContent).toContain('Eu sou Kaio Oliveira');
  });
  it('Deve renderizar div escrita Sou Desenvolvedor Fullstack', () => {
    const titleElement = fixture.nativeElement.querySelector('.elements');
    expect(titleElement.textContent).toContain('Sou Desenvolvedor Fullstack');
  });
});

