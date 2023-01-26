import { Spin } from 'antd';
import HomePageUI from '../core-ui/home-page-ui';
import { useGetAllLauncherQuery } from '../redux/api/launcher-api';

const HomePage = () => {
  const { data, isLoading } = useGetAllLauncherQuery('');

  return (
    <Spin spinning={isLoading}>
      <HomePageUI isLoading={isLoading} launchers={data} />
    </Spin>
  );
};

export default HomePage;
