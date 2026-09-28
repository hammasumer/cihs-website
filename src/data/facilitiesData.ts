export interface FacilityItem {
  id: string;
  title: string;
  icon: 'flask' | 'stethoscope' | 'dna' | 'book-open' | 'library' | 'users';
}

export const facilitiesList: FacilityItem[] = [
  { id: '1', title: 'Nursing Labs', icon: 'flask' },
  { id: '2', title: 'Clinical Training', icon: 'stethoscope' },
  { id: '3', title: 'Skills Laboratory', icon: 'dna' },
  { id: '4', title: 'Classrooms', icon: 'book-open' },
  { id: '5', title: 'Library', icon: 'library' },
  { id: '6', title: 'Student Facilities', icon: 'users' },
];
