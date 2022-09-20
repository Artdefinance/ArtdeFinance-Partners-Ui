import Slider from '@material-ui/core/Slider';
import './StatusBar.scss';

export default function StatusBar() {
  return (
    <div>
      <Slider
        defaultValue={1}
        step={1}
        marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
          label: i,
          value: i,
        }))}
        min={1}
        max={10}
      />
    </div>
  );
}
