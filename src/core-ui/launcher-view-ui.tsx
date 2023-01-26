import { Card, Col, Descriptions, Row } from 'antd';
import { LauncherType } from '../types';

const LauncherViewUI = ({ launcher }: { launcher: LauncherType }) => {
  return (
    <Row justify='center'>
      <Col xs={24} lg={16}>
        <Card bodyStyle={{ padding: ' 0px' }} title={launcher?.mission_name}>
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <img height={280} src={launcher?.links?.mission_patch_small} />
          </div>
          <Descriptions labelStyle={{ width: '30%' }} column={1} bordered>
            <Descriptions.Item label='Mission Details'>
              {launcher?.details}
            </Descriptions.Item>
            <Descriptions.Item label='Static Fire Date'>
              <>{new Date(launcher?.static_fire_date_utc).toDateString()}</>
            </Descriptions.Item>
            <Descriptions.Item label='Launch Date'>
              <>{new Date(launcher?.launch_date_local).toDateString()}</>
            </Descriptions.Item>
            <Descriptions.Item label='Rocket Name'>
              {launcher?.rocket?.rocket_name}
            </Descriptions.Item>
            <Descriptions.Item label='Launch Site'>
              {launcher?.launch_site?.site_name_long}
            </Descriptions.Item>
            <Descriptions.Item label='Launch Status'>
              {launcher?.launch_success ? 'Success' : 'Failed'}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  );
};

export default LauncherViewUI;
