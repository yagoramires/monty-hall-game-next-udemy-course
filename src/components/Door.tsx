import DoorModel from '../models/door';
import styles from '../styles/Door.module.css';
import Gift from './Gift';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = (props: DoorProps) => {
  const door = props.value;

  const alternateSelection = (e) => props.onChange(door.alternateSelection());

  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.openDoor());
  };

  return (
    <div className={styles.area} onClick={alternateSelection}>
      <div
        className={`${styles.structure} ${
          door.selected && !door.open && styles.selected
        }`}
      >
        {door.closed && (
          <div className={styles.door}>
            <div className={styles.number}>{door.doorNumber}</div>
            <div className={styles.handle} onClick={open}></div>
          </div>
        )}
        {door.open && door.gift && <Gift />}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
