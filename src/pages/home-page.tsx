import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import HomePageUI from '../core-ui/home-page-ui';
import { useGetAllLauncherQuery } from '../redux/api/launcher-api';
import { LauncherType } from '../types';

const HomePage = () => {
  const { data, isLoading } = useGetAllLauncherQuery('');
  const [launchers, setLaunchers] = useState<LauncherType[]>(data);

  useEffect(() => {
    setLaunchers(data);
  }, [data]);

  return (
    <Spin spinning={isLoading}>
      <HomePageUI launchers={launchers} setLaunchers={setLaunchers} />
    </Spin>
  );
};

export default HomePage;
