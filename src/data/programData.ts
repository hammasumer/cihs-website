export interface DegreeProgram {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  type: string;
  eligibility: string;
  description: string;
}

export interface DiplomaProgram {
  id: string;
  title: string;
  abbr: string;
  buttonText: string;
  link: string;
  iconName: 'baby' | 'user-check' | 'award' | 'heart-pulse';
  duration: string;
}

export const degreePrograms: DegreeProgram[] = [
  {
    id: 'gbsn',
    title: 'BS Nursing (GBSN)',
    subtitle: 'Generic BS Nursing',
    duration: '4 Years Degree Program',
    type: 'Full-Time Degree',
    eligibility: 'F.Sc. Pre-Medical (50% Marks Minimum)',
    description:
      'Comprehensive 4-year undergraduate degree preparing compassionate, skilled professional nurses equipped with advanced clinical reasoning and leadership skills.',
  },
  {
    id: 'post-rn',
    title: 'Post RN BSN',
    subtitle: 'Post Registered Nurse BSN',
    duration: '2 Years Degree Program',
    type: 'Undergraduate Degree',
    eligibility: 'Diploma in General Nursing + Midwifery / Specialization + Valid PNC',
    description:
      'A 2-year post-RN baccalaureate program designed for practicing registered nurses aiming to advance their clinical expertise, leadership, and professional growth.',
  },
];

export const diplomaPrograms: DiplomaProgram[] = [
  {
    id: 'cmw',
    title: 'Community Midwife',
    abbr: 'CMW',
    buttonText: 'CMW →',
    link: 'https://cihs.edu.pk/cmw.php',
    iconName: 'baby',
    duration: '2 Years Diploma',
  },
  {
    id: 'lhv',
    title: 'Lady Health Visitor',
    abbr: 'LHV',
    buttonText: 'LHV →',
    link: 'https://cihs.edu.pk/lhv.php',
    iconName: 'user-check',
    duration: '2 Years Diploma',
  },
  {
    id: 'cna',
    title: 'Certified Nursing Assistant',
    abbr: 'CNA',
    buttonText: 'CNA →',
    link: 'https://cihs.edu.pk/cna.php',
    iconName: 'award',
    duration: '2 Years Diploma',
  },
  {
    id: 'na',
    title: 'Nursing Assistant',
    abbr: 'NA',
    buttonText: 'NA →',
    link: 'https://cihs.edu.pk/na.php',
    iconName: 'heart-pulse',
    duration: '1 Year Diploma',
  },
];
