import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import HomePageUI from '../core-ui/home-page-ui';
import { useGetAllLauncherQuery } from '../redux/api/launcher-api';

const HomePage = () => {
  const { data, isLoading } = useGetAllLauncherQuery('');
  const [launchers, setLaunchers] = useState(data);

  useEffect(() => {
    setLaunchers(data);
  }, [data]);

  return (
    <Spin spinning={isLoading}>
      <HomePageUI
        isLoading={isLoading}
        launchers={launchers}
        setLaunchers={setLaunchers}
      />
    </Spin>
  );
};

export default HomePage;
