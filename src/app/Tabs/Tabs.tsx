import React, { useState } from "react";
import { tabTitles } from "../datasets/constants";
import { useGlobalDataStore } from "../layout";
import { TabComponent } from "../TabComponent/TabComponent";
import { StyledGroupedTabsComponent } from "./Tabs.styles";

export const Tabs = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const setSelectedTabIdx = useGlobalDataStore((state: any) => state.setSelectedTabIdx);
    const selectedTabIdx = useGlobalDataStore((state: any) => state.selectedTabIdx);
    const onTabSelection = (tabIdx: number) => {
        setSelectedTabIdx(tabIdx);
        setIsDropdownOpen(false);
    }

    const onDropDownSelect = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <StyledGroupedTabsComponent>
            <div className="tabs-container">
                <div className="dropdown-and-icon-container dropdown">
                    <input type="checkbox" id="dropdown" checked={isDropdownOpen}/>
                    <label className="dropdown__face" htmlFor="dropdown" onClick={() => onDropDownSelect()}>
                        <div className="dropdown__text">{tabTitles[selectedTabIdx]}</div>
                        {!isDropdownOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="dropdown-icon">
                                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                                <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z"/>
                            </svg>
                        )}
                        {isDropdownOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="dropdown-icon">
                                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
                                <path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z"/>
                            </svg>
                        )}
                    </label>
                    <ul className="dropdown-container dropdown__items">
                        {tabTitles.map((tabTitle: string, tabIdx: number) => (
                            <TabComponent tabName={tabTitle} onTabSelection={onTabSelection} tabIdx={tabIdx} isDropdownOpen={isDropdownOpen} key={tabIdx}/>
                        ))}
                    </ul>
                </div>
                <svg>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
                </svg>
            </div>
            
        </StyledGroupedTabsComponent>
    );
}