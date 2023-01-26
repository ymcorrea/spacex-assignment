import { Col, Input, Row, Select } from 'antd';
import Search from 'antd/es/input/Search';
import { Option } from 'antd/es/mentions';

const HeaderUI: React.FC<any> = ({
  onSelectUpcoming,
  onSearch,
  sortByStatusFunction,
  sortByDateFunction,
}: any) => {
  return (
    <Row justify='space-between' gutter={[16, 16]} align='middle'>
      <Col lg={12} xs={22}>
        <Search
          placeholder='Search by Rocket name'
          allowClear
          enterButton='Search'
          size='large'
          onSearch={onSearch}
        />
      </Col>
      <Col lg={12} xs={22}>
        <Input.Group
          compact
          size='large'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Select
            style={{ width: '33%' }}
            placeholder='Sort by date'
            size='large'
            onSelect={sortByDateFunction}
          >
            <Option value='week'>Last Week</Option>
            <Option value='month'>Last Month</Option>
            <Option value='year'>Last Year</Option>
          </Select>
          <Select
            style={{ width: '33%' }}
            placeholder='Sort by status'
            size='large'
            onSelect={sortByStatusFunction}
          >
            <Option value='false'>Failer</Option>
            <Option value='true'>Success</Option>
          </Select>
          <Select
            style={{ width: '33%' }}
            placeholder='Is it upcomming'
            size='large'
            onSelect={onSelectUpcoming}
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
