import { Col, Input, Row, Select } from 'antd';
import Search from 'antd/es/input/Search';

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
            <Select.Option value='week'>Last Week</Select.Option>
            <Select.Option value='month'>Last Month</Select.Option>
            <Select.Option value='year'>Last Year</Select.Option>
          </Select>
          <Select
            style={{ width: '33%' }}
            placeholder='Sort by status'
            size='large'
            onSelect={sortByStatusFunction}
          >
            <Select.Option value='false'>Failer</Select.Option>
            <Select.Option value='true'>Success</Select.Option>
          </Select>
          <Select
            style={{ width: '33%' }}
            placeholder='Is it upcomming'
            size='large'
            onSelect={onSelectUpcoming}
          >
            <Select.Option value='true'>Upcomming</Select.Option>
            <Select.Option value='false'>Not Upcomming</Select.Option>
          </Select>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default HeaderUI;
