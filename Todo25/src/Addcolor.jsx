import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function Addcolor() {
  const [color, setColor] = useState("skyblue");

  const [colorList, setColorList] = useState(["orange", "blue", "purple", "violet"]);
  const styles = {
    background: color
  };

  return (
    <div>
      <div className="add-color">
        <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} />
        <button onClick={() => setColorList([...colorList], color)}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
