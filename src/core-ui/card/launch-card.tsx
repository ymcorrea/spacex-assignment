import { Card, Divider, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../../routes/api-endpoints';
import { LaunchCardProps } from '../../types';

const LaunchCard: React.FC<LaunchCardProps> = ({ launcher }) => {
  const { Paragraph } = Typography;

  return (
    <Link to={`/${API_ENDPOINTS.LAUNCHER}/${launcher.flight_number}`}>
      <Card
        bodyStyle={{ padding: '24px 0px' }}
        title={launcher.mission_name}
        hoverable={true}
      >
        <div style={{ textAlign: 'center' }}>
          <img height={120} src={launcher.links.mission_patch_small} />
        </div>
        <Divider />
        <div style={{ padding: '0 12px' }}>
          <Paragraph
            ellipsis={{
              rows: 3,
            }}
          >
            {' '}
            {launcher.details}
          </Paragraph>
        </div>
      </Card>
    </Link>
  );
};

export default LaunchCard;
