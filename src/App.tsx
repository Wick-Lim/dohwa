import { Alignment, Button, Divider, Menu, MenuDivider, MenuItem, Navbar, Popover, Tab, TabId, TabPanel, Tabs, Tree, TreeNodeInfo } from "@blueprintjs/core";
import { useId, useState } from "react";
import Column from "./components/Column";
import Renderer from "./components/Renderer";
import Row from "./components/Row";

export default function App() {
  const TABS_PARENT_ID = useId();

  const [selectedTabId, setSelectedTabId] = useState<TabId>("Hierachy");
  const [contents] = useState<TreeNodeInfo[]>([
    {
      id: 0,
      icon: "mobile-phone",
      label: "Mobile Page 1",
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
    {
      id: 5,
      icon: "mobile-phone",
      label: "Mobile Page 1",
      isExpanded: true,
      childNodes: [
        {
          id: 6,
          icon: "alignment-horizontal-center",
          label: "Item 0",
        },
        {
          id: 7,
          icon: "alignment-horizontal-center",
          label: "Item 1",
          isExpanded: true,
          childNodes: [
            {
              id: 8,
              icon: "alignment-horizontal-center",
              label: "Item 2",
            },
            {
              id: 9,
              icon: "alignment-horizontal-center",
              label: "Item 3",
            },
          ],
        },
      ],
    },
  ]);

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
          <Button icon="user" minimal />
          <Button icon="notifications" minimal />
          <Button icon="cog" minimal />
        </Navbar.Group>
      </Navbar>

      <Row className="grow">
        <Column className="w-[250px]">
          <Tabs className="flex flex-row p-2" id={TABS_PARENT_ID} onChange={(tabId) => setSelectedTabId(tabId)} selectedTabId={selectedTabId}>
            <Tab id="Hierachy" title="Hierachy" icon="layout-hierarchy" />
          </Tabs>
          <TabPanel
            id="Hierachy"
            className="flex flex-col grow my-0"
            selectedTabId={selectedTabId}
            parentId={TABS_PARENT_ID}
            panel={(
              <Column className="grow">
                <Column className="relative h-[200px]">
                  <Column className="absolute w-full h-full overflow-y-scroll">
                    <Row className="sticky top-0 bg-white py-1 pl-1 pr-4 items-center">
                      <MenuDivider title="Pages" />
                      <Row className="grow" />
                      <Button icon="plus" minimal />
                    </Row>
                    <Menu>
                      <MenuItem icon="document" text="New Page" active />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                      <MenuItem icon="document" text="New Page" />
                    </Menu>
                  </Column>
                </Column>
                <Divider />
                <Column className="relative grow">
                  <Column className="absolute w-full h-full overflow-y-scroll">
                    <Row className="sticky top-0 bg-white py-1 pl-1 pr-4 items-center">
                      <MenuDivider title="Hierachy" />
                      <Row className="grow" />
                      <Button icon="plus" minimal />
                    </Row>
                    <Tree
                      contents={contents}
                      onNodeContextMenu={(_, __, e) => {
                        e.preventDefault();
                      }}
                    />
                  </Column>
                </Column>
              </Column>
            )}
          />
        </Column>
        <Column className="relative grow">
          <Column className="absolute w-full h-full">
            <Renderer data={contents} onDataChange={() => { }} />
          </Column>
        </Column>
      </Row>
    </>
  );
}
