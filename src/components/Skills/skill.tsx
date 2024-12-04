import Skill from '@/components/Skills/style.module.css';  // Correct import of the CSS module
import Image from 'next/image'

interface SkillProps {
  icon: string;  // Use string type for the icon path
  label: string;
}

const Skills = ({ icon, label }: SkillProps) => {
  return (
    <div className={Skill.main}>
      
      <button className={Skill['icon-button']}>
        <Image src={icon} alt={`${label} icon`} className={Skill.icon}
        width={40}
        height={40} />
        <span className={Skill.label}>{label}</span>
      </button>
      
    </div>
    
  );
};

export default Skills;
