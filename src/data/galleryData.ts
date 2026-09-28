import gallery01 from '../assets/gallery/gallery-01.jpeg';
import gallery02 from '../assets/gallery/gallery-02.jpeg';
import gallery03 from '../assets/gallery/gallery-03.jpg';
import gallery04 from '../assets/gallery/gallery-04.jpeg';
import gallery05 from '../assets/gallery/gallery-05.jpg';
import gallery06 from '../assets/gallery/gallery-06.jpeg';
import gallery07 from '../assets/gallery/gallery-07.jpg';
import gallery08 from '../assets/gallery/gallery-08.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: '1',
    title: 'Nursing Students Group Discussion',
    category: 'Student Life',
    image: gallery01,
  },
  {
    id: '2',
    title: 'CIHS Institute Campus Facade',
    category: 'Campus',
    image: gallery02,
  },
  {
    id: '3',
    title: 'Clinical Training & Skills Laboratory',
    category: 'Laboratory',
    image: gallery03,
  },
  {
    id: '4',
    title: 'Medical Sciences Reference Library',
    category: 'Academics',
    image: gallery04,
  },
  {
    id: '5',
    title: 'Healthcare Students in Clinical Uniform',
    category: 'Student Life',
    image: gallery05,
  },
  {
    id: '6',
    title: 'Faculty Mentorship & Clinical Guidance',
    category: 'Training',
    image: gallery06,
  },
  {
    id: '7',
    title: 'Academic Leadership & Department Meetings',
    category: 'Administration',
    image: gallery07,
  },
  {
    id: '8',
    title: 'Simulation & Practical Skill Evaluation',
    category: 'Laboratory',
    image: gallery08,
  },
];
