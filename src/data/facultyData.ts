import faculty01 from '../assets/faculty/faculty-01.jpeg';
import faculty02 from '../assets/faculty/faculty-02.jpeg';
import faculty03 from '../assets/faculty/faculty-03.jpeg';
import faculty04 from '../assets/faculty/faculty-04.jpeg';
import faculty05 from '../assets/faculty/faculty-05.jpeg';
import faculty06 from '../assets/faculty/faculty-06.jpeg';
import faculty07 from '../assets/faculty/faculty-07.jpeg';
import faculty08 from '../assets/faculty/faculty-08.jpeg';
import faculty09 from '../assets/faculty/faculty-09.jpeg';
import faculty10 from '../assets/faculty/faculty-10.jpeg';








export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  image: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: '1',
    name: 'Sir Saleem Ullah',
    designation: 'Principal/Director',
    department: 'Nursing & Midwifery',
    image: faculty01,
  },
  {
    id: '2',
    name: 'Miss Aisha',
    designation: 'Administrator',
    department: 'Administration',
    image: faculty02,
  },
  {
    id: '3',
    name: 'Sir DeviDas',
    designation: 'Vice Principal',
    department: 'Nursing & Midwifery',
    image: faculty03,
  },
  {
    id: '4',
    name: 'Sir Faraz',
    designation: 'Program Coordinator',
    department: 'Nursing & Midwifery',
    image: faculty04,
  },
  {
    id: '5',
    name: 'Miss Arshiya Yasir ',
    designation: ' English Lecturer',
    department: 'Nursing & Midwifery',
    image: faculty05,
  },
  {
    id: '6',
    name: 'Miss Sana Jilani',
    designation: 'Nursing Lecturer',
    department: 'Nursing & Midwifery',
    image: faculty06,
  },
  {
    id: '7',
    name: 'Sir Rehan',
    designation: 'Nursing Lecturer',
    department: 'Nursing & Midwifery',
    image: faculty07,
  },
  {
    id: '8',
    name: 'Sir Zaheer',
    designation: 'IT Lecturer',
    department: 'Computer Lab',
    image: faculty08,
  },
  {
    id: '9',
    name: 'Miss Asma',
    designation: 'Nursing Lecturer',
    department: 'Nursing & Midwifery',
    image: faculty09,
  },
  {
    id: '10',
    name: 'Miss Tehreem',
    designation: 'Calling Officer',
    department: 'Admin',
    image: faculty10,
  },
];
