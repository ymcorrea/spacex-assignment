import { Space } from 'antd';
import { Col, Row } from 'antd/es/grid';
import React from 'react';
import Header from '../container/header';
import { LauncherType } from '../types';
import LaunchCard from './card/launch-card';

interface HomePageProps {
  launchers: LauncherType[];
  setLaunchers: React.Dispatch<React.SetStateAction<LauncherType[]>>;
}

const HomePageUI: React.FC<HomePageProps> = ({ launchers, setLaunchers }) => {
  return (
    <Space style={{ display: 'flex' }} size={20} direction='vertical'>
      <Header setLaunchers={setLaunchers} />
      <Row gutter={[8, 16]}>
        {launchers?.map((launcher: LauncherType, index: number) => (
          <Col key={index} lg={8} xs={24}>
            <LaunchCard launcher={launcher} />
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default HomePageUI;
