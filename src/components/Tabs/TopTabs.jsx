import React from 'react';
import { Tabs } from 'antd';
import './TopTabs.scss';

function TopTabs() {
  const { TabPane } = Tabs;

  const handleTab = function (e) {
    console.log(e);
  };

  return (
    <Tabs defaultActiveKey='1' centered onChange={handleTab}>
      <TabPane tab='Tab 1' key='1'>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab='Tab 2' key='2'>
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
}

export default TopTabs;
