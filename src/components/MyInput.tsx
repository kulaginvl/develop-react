import { FC } from 'react';
import classNames from 'classnames';

interface MyInputState {
  placeholder: string;
  type: string;
  value: string | number;
  onChangeMyInput: (event: string) => void;
}

export const MyInput: FC<MyInputState> = ({ placeholder, value, onChangeMyInput, type }) => {
  return (
    <div className="addform__myinput">
      <span className={classNames(value ? 'addform__descript-active' : 'addform__descript')}>
        {placeholder}
      </span>
      <input
        className="addform__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeMyInput(e.currentTarget.value)}
      />
    </div>
  );
};
