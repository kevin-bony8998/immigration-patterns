export interface TabComponentProps {
    tabName: string,
    tabIdx: number,
    onTabSelection: (tabIdx: number) => void,
    isDropdownOpen: boolean,
}