export const enum SectionId {
  Testimonials = 'testimonials',
  About = 'about',
  Teachings = 'teachings',
  Courses = 'courses',
}

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

const toHref = (id: SectionId) => '#' + id;

export const navListItems: NavMenuListItem[] = [
  {
    name: 'About Us',
    sectionId: toHref(SectionId.About),
  },
  {
    name: 'Courses',
    sectionId: toHref(SectionId.Courses),
  },
  {
    name: 'Testimonials',
    sectionId: toHref(SectionId.Testimonials),
  },
];
