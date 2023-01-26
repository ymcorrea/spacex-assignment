import { Space } from 'antd';
import { Col, Row } from 'antd/es/grid';
import React from 'react';
import LaunchCard from './card/launch-card';
import HeaderUI from './header-ui';

const HomePageUI: React.FC<any> = ({ launchers }) => {
  return (
    <Space size={20} direction='vertical'>
      <HeaderUI />
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
