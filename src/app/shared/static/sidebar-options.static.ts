import { SidebarOption } from "../interfaces/sidebar-option.interface";


export const sharedSidebarOptions: SidebarOption[] = [
  {
    label: 'Libros',
    icon: 'auto_stories',
    route: '/library/books'
  }
];

export const librarianSidebarOptions: SidebarOption[] = [
  ...sharedSidebarOptions,
  {
    label: 'Autores',
    icon: 'contact_page',
    route: '/library/authors'
  },
  {
    label: 'Carreras',
    icon: 'school',
    route: '/library/degrees'
  },
  {
    label: 'Prestamos',
    icon: 'style',
    route: '/library/loans'
  },
  {
    label: 'Editoriales',
    icon: 'rate_review',
    route: '/library/publishers'
  },
  {
    label: 'Estudiantes',
    icon: 'supervised_user_circle',
    route: '/library/students'
  },
  // {
  //   label: 'Cargar Datos',
  //   icon: 'upload',
  //   route: '/library/data-upload'
  // },
  {
    label: 'Configuracion',
    icon: 'settings_suggest',
    route: '/library/configuration'
  },
  {
    label: 'Panel de Control',
    icon: 'analytics',
    route: '/library/dashboard'
  }
];

export const studentSidebarOptions: SidebarOption[] = [
  ...sharedSidebarOptions,
  {
    label: 'Reservas',
    icon: 'book',
    route: '/library/reserves'
  }
];
