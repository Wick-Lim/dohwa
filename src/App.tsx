import { Alignment, Button, Divider, Menu, MenuItem, Navbar, Popover, Tab, TabId, TabPanel, Tabs, Tree } from "@blueprintjs/core";
import { useId, useState } from "react";
import Renderer from "./components/Renderer";
import Row from "./components/Row";
import Column from "./components/Column";

export default function App() {
  const TABS_PARENT_ID = useId();
  const [selectedTabId, setSelectedTabId] = useState<TabId>("Hierachy");

  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            DOHWA
          </Navbar.Heading>
          <Navbar.Divider />
          <Popover content={(
            <Menu>
              <MenuItem icon="new-text-box" text="New File" />
              <MenuItem icon="new-text-box" text="New File" />
              <MenuItem icon="new-text-box" text="New File" />
              <MenuItem icon="new-text-box" text="New File" />
              <MenuItem icon="new-text-box" text="New File" />
            </Menu>
          )} fill={true} placement="bottom">
            <Button className="bp5-minimal" icon="home" text="Home" />
          </Popover>
          <Button className="bp5-minimal" icon="document" text="Files" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Button className="bp5-minimal" icon="user" />
          <Button className="bp5-minimal" icon="notifications" />
          <Button className="bp5-minimal" icon="cog" />
        </Navbar.Group>
      </Navbar>

      <Row className="grow">
        <Column className="w-[250px]">
          <Tabs className="flex flex-row px-4" id={TABS_PARENT_ID} onChange={(tabId) => setSelectedTabId(tabId)} selectedTabId={selectedTabId}>
            <Tab id="Hierachy" title="Hierachy" icon="layout-hierarchy" />
          </Tabs>
          <Divider />
          <TabPanel
            id="Hierachy"
            className="my-0"
            selectedTabId={selectedTabId}
            parentId={TABS_PARENT_ID}
            panel={(
              <Tree contents={[
                {
                  id: 0,
                  hasCaret: true,
                  icon: "cube",
                  label: "Folder 0",
                  isExpanded: true,
                  childNodes: [
                    {
                      id: 1,
                      icon: "cube",
                      label: "Item 0",
                    },
                    {
                      id: 2,
                      icon: "cube",
                      label: "Item 1",
                    },
                  ],
                },
              ]} />
            )}
          />
        </Column>
        <Column className="relative grow">
          <Column className="absolute w-full h-full">
            <Renderer data={{}} onDataChange={() => {}} />
          </Column>
        </Column>
      </Row>
    </>
  );
}
