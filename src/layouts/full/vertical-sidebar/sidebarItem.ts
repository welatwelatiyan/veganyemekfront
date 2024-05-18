import {
  CircleIcon,
  WindmillIcon,
  ShadowIcon,
  BrandChromeIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
 
  {
    title: 'Firma',
    icon: WindmillIcon,
    to:'/'
  },
  { divider: true },
  {
    title: 'Ürünler',
    icon: ShadowIcon,
    to:'/product'
  },
  { divider: true },
  {
    title: 'Menüler',
    icon: BrandChromeIcon,
    to:'/menu'
  },
  { divider: true },
  {
    title: 'Siparişler',
    icon: CircleIcon,
    to:'/order'
  }
];

export default sidebarItem;
