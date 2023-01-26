import { Space } from 'antd';
import { Col, Row } from 'antd/es/grid';
import React from 'react';
import Header from '../container/header';
import LaunchCard from './card/launch-card';

const HomePageUI: React.FC<any> = ({ launchers, setLaunchers }) => {
  return (
    <Space style={{ display: 'flex' }} size={20} direction='vertical'>
      <Header setLaunchers={setLaunchers} />
      <Row gutter={[8, 16]}>
        {launchers?.map((launcher: any, index: number) => (
          <Col key={index} lg={8} xs={24}>
            <LaunchCard launcher={launcher} />
          </Col>
        ))}
      </Row>
    </Space>
  );
};

export default HomePageUI;
