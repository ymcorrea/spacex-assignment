import { Card, Col, Descriptions, Row } from 'antd';

const LauncherViewUI = ({ launcher }: any) => {
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
            <Descriptions.Item label='Launch Date'>
              <>{new Date(launcher?.launch_date_local).toDateString()}</>
            </Descriptions.Item>
            <Descriptions.Item label='Rocket Name'>
              {launcher?.rocket?.rocket_name}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  );
};

export default LauncherViewUI;
