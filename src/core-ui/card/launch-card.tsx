import { Card, Descriptions, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../routes/api-endpoints';
import { LaunchCardProps } from '../../types';

const LaunchCard: React.FC<LaunchCardProps> = ({ launcher }) => {
  const { Paragraph } = Typography;

  return (
    <Link to={`/${API_ENDPOINTS.LAUNCHER}/${launcher.flight_number}`}>
      <Card
        bodyStyle={{ padding: ' 0px' }}
        title={launcher.mission_name}
        hoverable={true}
      >
        <div style={{ textAlign: 'center', padding: '12px' }}>
          <img height={120} src={launcher.links.mission_patch_small} />
        </div>
        <Descriptions labelStyle={{ width: '30%' }} column={1} bordered>
          <Descriptions.Item
            contentStyle={{ height: '90px' }}
            label='Mission Details'
          >
            <Paragraph
              ellipsis={{
                rows: 2,
              }}
            >
              {' '}
              {launcher.details}
            </Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label='Launch Date'>
            <>{new Date(launcher?.launch_date_local).toDateString()}</>
          </Descriptions.Item>
          <Descriptions.Item label='Rocket Name'>
            {launcher?.rocket?.rocket_name}
          </Descriptions.Item>
          <Descriptions.Item label='Launch Site'>
            {launcher?.launch_site?.site_name}
          </Descriptions.Item>
          <Descriptions.Item label='Launch Status'>
            {launcher?.launch_success ? 'Success' : 'Failed'}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Link>
  );
};

export default LaunchCard;
