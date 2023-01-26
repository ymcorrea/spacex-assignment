import HeaderUI from '../core-ui/header-ui';
import { useGetAllLauncherQuery } from '../redux/api/launcher-api';
import { checkDateRange } from '../utils/checkDateRange';

const Header: React.FC<any> = ({ setLaunchers }: any) => {
  const { data } = useGetAllLauncherQuery('');

  // === Search Function ===
  const onSearch = (value: string) => {
    const searchResult = data.filter(
      (launcher: { rocket: { rocket_name: string } }) =>
        launcher?.rocket?.rocket_name
          ?.toLowerCase()
          ?.includes(value.toLowerCase()),
    );
    setLaunchers(searchResult);
  };

  // === Sort by date function ===
  const sortByDateFunction = (selected: string) => {
    const filtered = data.filter(
      (launcher: any) =>
        checkDateRange(new Date(launcher.launch_date_utc)) === selected,
    );

    setLaunchers(filtered);
  };

  // === Sort by launcher status ===
  const sortByStatusFunction = (selected: string) => {
    const filtered = data.filter(
      (launcher: any) => launcher?.launch_success?.toString() === selected,
    );
    setLaunchers(filtered);
  };

  // === Sort by Is Upcomming ===
  const onSelectUpcoming = (selected: string) => {
    const filtered = data.filter(
      (launcher: any) => launcher?.upcoming?.toString() === selected,
    );
    setLaunchers(filtered);
  };

  return (
    <HeaderUI
      onSearch={onSearch}
      onSelectUpcoming={onSelectUpcoming}
      sortByStatusFunction={sortByStatusFunction}
      sortByDateFunction={sortByDateFunction}
    />
  );
};

export default Header;
