import { Card, Divider } from 'antd';
import React from 'react';

const LaunchCard: React.FC<any> = ({ launcher }) => {
  return (
    <Card bodyStyle={{ padding: '24px 0px' }} title={launcher.mission_name} hoverable={true}>
      <div style={{ textAlign: 'center' }}>
        <img height={120} src={launcher.links.mission_patch_small} />
      </div>
      <Divider />
    </Card>
  );
};

export default LaunchCard;
