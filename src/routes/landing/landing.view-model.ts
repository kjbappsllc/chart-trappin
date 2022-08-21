
export interface SectionProps {
  sectionId: string;
}

export interface NavMenuListItem {
  name: string;
  sectionId: string;
}

export interface NavMenuListProps {
  items: NavMenuListItem[];
}

export const navListItems: NavMenuListItem[] = [
  {
    name: 'About Us',
    sectionId: '#About',
  },
  {
    name: 'Testimonials',
    sectionId: '#Testimonials',
  },
  {
    name: 'Teachings',
    sectionId: '#Teachings',
  },
  {
    name: 'Courses',
    sectionId: '#Courses',
  },
];
