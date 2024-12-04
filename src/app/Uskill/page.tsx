import Skills from '@/components/Skills/skill';
import Skill from '@/components/Skills/style.module.css';

const Myskill = () => {
  return (
    <div className={Skill.container} id='Uskill'>
      
      <div className={Skill.bgContainer}>
        <Skills icon="/html.svg" label="HTML" />
        <Skills icon="/css.svg" label="CSS" />
        <Skills icon="/java.svg" label="JAVASCRIPT" />
        <Skills icon="/type.svg" label="TYPESCRIPT" />
        <Skills icon="/react.svg" label="REACT.JS" />
        <Skills icon="/next.svg" label="NEXT.JS" />
        <Skills icon="/tail.svg" label="TAILWIND CSS" />
        <Skills icon="/sdcn.png" label="SHADCN UI" />
        <Skills icon="/boot.svg" label="BOOTSTRAP" />
      </div>
    </div>
  );
};

export default Myskill;

