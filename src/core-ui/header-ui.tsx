import { Col, Input, Row, Select } from 'antd';
import Search from 'antd/es/input/Search';
import { Option } from 'antd/es/mentions';

const HeaderUI = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Row justify='space-between' gutter={[16, 16]} align='middle'>
      <Col lg={12} xs={22}>
        <Search
          placeholder='Search launcher by name'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={onSearch}
        />
      </Col>
      <Col lg={12} xs={22}>
        <Input.Group compact size='large' style={{ display: 'flex', justifyContent: 'center' }}>
          <Select style={{ width: '33%' }} placeholder='Sort by date' size='large'>
            <Option value='week'>Last Week</Option>
            <Option value='month'>Last Month</Option>
            <Option value='year'>Last Year</Option>
          </Select>
          <Select style={{ width: '33%' }} placeholder='Sort by status' size='large'>
            <Option value='fail'>Failer</Option>
            <Option value='success'>Success</Option>
          </Select>
          <Select
            style={{ width: '33%' }}
            placeholder='Is it upcomming'
            size='large'
            onSelect={(e) => console.log(e)}
          >
            <Option value='true'>Upcomming</Option>
            <Option value='false'>Not Upcomming</Option>
          </Select>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default HeaderUI;
