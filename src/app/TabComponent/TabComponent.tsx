import React from "react";
import { TabComponentProps } from "./TabComponent.types";
import { useGlobalDataStore } from "../layout";
import { StyledTabComponent } from "./TabComponent.styles";

export const TabComponent:React.FC<TabComponentProps>= ({tabName, onTabSelection, tabIdx, key}) => {
    const selectedTabIdx = useGlobalDataStore((state: any) => state.selectedTabIdx);
    return (
        <StyledTabComponent>
            <li onClick={() => onTabSelection(tabIdx)} className={`individual-tab-component ${tabIdx === selectedTabIdx ? 'active-tab' : 'inactive-tab'}`} key={key}>
                {tabName}
            </li>
        </StyledTabComponent>
    );
}