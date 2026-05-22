import { Calculator, Microscope, Globe, BookOpen, ClipboardList } from 'lucide-react';

export const categoriesData = [
  {
    id: 'ncert-books',
    name: 'NCERT Books',
    icon: BookOpen,
    color: 'bg-indigo-500',
    description: 'Official CBSE textbooks for Class 10',
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        icon: Calculator,
        color: 'bg-blue-500',
        description: 'Algebra, Geometry, Trigonometry and more'
      },
      {
        id: 'science',
        name: 'Science',
        icon: Microscope,
        color: 'bg-emerald-500',
        description: 'Physics, Chemistry, and Biology'
      },
      {
        id: 'social-science',
        name: 'Social Science',
        icon: Globe,
        color: 'bg-orange-500',
        description: 'History, Geography, and Civics'
      }
    ]
  },
  {
    id: 'ncert-solutions',
    name: 'NCERT Solutions',
    icon: ClipboardList,
    color: 'bg-teal-500',
    description: 'Step-by-step solutions for all exercises',
    subjects: [
      {
        id: 'mathematics-solutions',
        name: 'Mathematics',
        icon: Calculator,
        color: 'bg-blue-500',
        description: 'Detailed solutions for Math problems'
      },
      {
        id: 'science-solutions',
        name: 'Science',
        icon: Microscope,
        color: 'bg-emerald-500',
        description: 'Physics, Chemistry, and Biology'
      },
      {
        id: 'social-science-solutions',
        name: 'Social Science',
        icon: Globe,
        color: 'bg-orange-500',
        description: 'History, Geography, and Civics'
      },
    ]
  },
  {
    id: 'Notes',
    name: 'Notes',
    icon: ClipboardList,
    color: 'bg-teal-500',
    description: 'Detailed notes for all subjects',
    subjects: [
      {
        id: 'mathematics-notes',
        name: 'Mathematics',
        icon: Calculator,
        color: 'bg-blue-500',
        description: 'Detailed notes for Math concepts'
      },
      {
        id: 'science-notes',
        name: 'Science',
        icon: Microscope,
        color: 'bg-emerald-500',
        description: 'Physics, Chemistry, and Biology'
      },
      {
        id: 'social-science-notes',
        name: 'Social Science',
        icon: Globe,
        color: 'bg-orange-500',
        description: 'History, Geography, and Civics'
      },
    ]
  }
];
