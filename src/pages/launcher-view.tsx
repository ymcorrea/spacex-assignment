import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import LauncherViewUI from '../core-ui/launcher-view-ui';
import { useGetSingleLauncherQuery } from '../redux/api/launcher-api';

const LauncherView = () => {
  const param = useParams();
  const { data, isLoading } = useGetSingleLauncherQuery(param['id']);

  return (
    <Spin spinning={isLoading}>
      <LauncherViewUI launcher={data} />
    </Spin>
  );
};

export default LauncherView;
