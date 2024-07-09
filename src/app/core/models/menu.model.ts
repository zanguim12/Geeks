export class Menu2 {
  label?: string;
  icon?: string;
  shortcut?: string;
  items?: MenuItem[];
  separator?: boolean;

}
export class  MenuItem  {
  label!: string;
  icon!: string;
  items?: Menu2[];

  badge?: string;

}
