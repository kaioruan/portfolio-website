import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { skills} from './skills';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Skills criado', () => {
    expect(component).toBeTruthy();
  });
  it('Tem um h2 escrito Skills & Ferramentas', () => {
    const titleElement = fixture.nativeElement.querySelector('.skills');
    expect(titleElement.textContent).toContain('Skills & Ferramentas');
  });
  it('Está renderizando a lista completa de Skills e seus icons', () => {
    const infoElements: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.info');
    expect(infoElements.length).toBe(skills.length);
    for (let i = 0; i < skills.length; i++) {
      const infoElement: HTMLElement = infoElements[i];
      const skillNameElement = infoElement.querySelector('p');
      const skillImageElement = infoElement.querySelector('img');
      expect(skillNameElement?.textContent).toBe(skills[i].name);
      expect(skillImageElement?.src).toContain(skills[i].icon);
    }
  });
});

