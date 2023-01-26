import HeaderUI from '../core-ui/header-ui';
import { useGetAllLauncherQuery } from '../redux/api/launcher-api';
import { LauncherType } from '../types';
import { checkDateRange } from '../utils/checkDateRange';

interface HeaderProps {
  setLaunchers: React.Dispatch<React.SetStateAction<LauncherType[]>>;
}

const Header = ({ setLaunchers }: HeaderProps) => {
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
      (launcher: LauncherType) =>
        checkDateRange(new Date(launcher.launch_date_utc)) === selected,
    );

    setLaunchers(filtered);
  };

  // === Sort by launcher status ===
  const sortByStatusFunction = (selected: string) => {
    const filtered = data.filter(
      (launcher: LauncherType) =>
        launcher?.launch_success?.toString() === selected,
    );
    setLaunchers(filtered);
  };

  // === Sort by Is Upcomming ===
  const onSelectUpcoming = (selected: string) => {
    const filtered = data.filter(
      (launcher: LauncherType) => launcher?.upcoming?.toString() === selected,
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
