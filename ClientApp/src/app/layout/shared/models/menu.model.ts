export interface MenuItem {
    id?: number;
    key?: string;
    label?: string;
    icon?: any;
    link?: string;
    collapsed?: boolean;
    children?: any;
    isTitle?: boolean;
    badge?: any;
    parentKey?: number;
    isMainParent?: boolean;
    invertIcon?: boolean;
}
