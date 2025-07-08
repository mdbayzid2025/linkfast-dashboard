export type TSidebarItem = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: TSidebarItem[];
    path?: string;
}