import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const wrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const wrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
wrapperTabList.tabsRole = "TabList";

export const wrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
wrapperTab.tabsRole = "Tab";

export const wrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
wrapperTabPanel.tabsRole = "TabPanel";

export const wrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;