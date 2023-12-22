import { Tabs, Text } from "@mantine/core";
import React from "react";

interface Tab {
  label: string
  content: React.ReactNode
}

interface TabProps {
  defaultValue: string
  tabList: Tab[]
}

export const TabComponent = (
  { defaultValue, tabList }: TabProps
) => {
  return (
    <Tabs defaultValue={defaultValue} variant='pills'>
      <Tabs.List>
        {
          tabList.map((tab) => (
            <Tabs.Tab key={tab.label} mb={'xl'} fw={'bold'} value={tab.label} c={'black'} fz={'md'} p={0} style={{
              backgroundColor: 'transparent',
            }}>
              <Text fw={'bold'}>
              {tab.label}
              </Text>
            </Tabs.Tab>
          ))
        }
      </Tabs.List>
      {
        tabList.map((tab) => (
          <Tabs.Panel key={tab.label} value={tab.label}>
            {tab.content}
          </Tabs.Panel>
        ))
      }
    </Tabs>
  );
}
