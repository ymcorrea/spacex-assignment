import { Card } from 'antd';

const LauncherViewUI = () => {
  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };

  return (
    <div>
      <Card title='Card Title'>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
    </div>
  );
};

export default LauncherViewUI;
