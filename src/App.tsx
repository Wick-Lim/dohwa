import { Alignment, Button, Divider, Menu, MenuDivider, MenuItem, Navbar, Popover, Tab, TabId, TabPanel, Tabs, Tree } from "@blueprintjs/core";
import { useId, useState } from "react";
import Column from "./components/Column";
import Renderer from "./components/Renderer";
import Row from "./components/Row";

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
            className="flex flex-col grow my-0"
            selectedTabId={selectedTabId}
            parentId={TABS_PARENT_ID}
            panel={(
              <Column className="grow">
                <Column className="relative h-[200px]">
                  <Column className="absolute w-full h-full overflow-y-scroll">
                    <Row className="sticky top-0 bg-white p-1">
                      <MenuDivider title="Frames" />
                    </Row>
                    <Menu>
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                      <MenuItem icon="document" text="New Frame" />
                    </Menu>
                  </Column>
                </Column>
                <Divider />
                <Column className="relative grow">
                  <Column className="absolute w-full h-full overflow-y-scroll">
                    <Row className="sticky top-0 bg-white p-1">
                      <MenuDivider title="Hierachy" />
                    </Row>
                    <Tree contents={[
                      {
                        id: 0,
                        icon: "alignment-vertical-center",
                        label: "Column",
                        isExpanded: true,
                        childNodes: [
                          {
                            id: 1,
                            icon: "alignment-horizontal-center",
                            label: "Item 0",
                          },
                          {
                            id: 2,
                            icon: "alignment-horizontal-center",
                            label: "Item 1",
                            isExpanded: true,
                            childNodes: [
                              {
                                id: 3,
                                icon: "alignment-horizontal-center",
                                label: "Item 2",
                              },
                              {
                                id: 4,
                                icon: "alignment-horizontal-center",
                                label: "Item 3",
                              },
                            ],
                          },
                        ],
                      },
                    ]} />
                  </Column>
                </Column>
              </Column>
            )}
          />
        </Column>
        <Column className="relative grow">
          <Column className="absolute w-full h-full">
            <Renderer data={{}} onDataChange={() => { }} />
          </Column>
        </Column>
      </Row>
    </>
  );
}
