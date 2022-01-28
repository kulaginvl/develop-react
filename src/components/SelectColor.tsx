import { FC } from 'react';
import classNames from 'classnames';

interface SelectColorType {
  onChangeColor: (c: string) => void;
  selectC: string;
}

export const SelectColor: FC<SelectColorType> = ({ onChangeColor, selectC }) => {
  const colors = ['white', 'black', 'grey', 'red', 'green'];

  return (
    <>
      {colors.map((c) => (
        <div
          key={c}
          className={classNames(
            'color',
            `color--${c}`,
            `${selectC === c ? `color--${selectC}-active` : ''}`,
          )}
          onClick={() => onChangeColor(c)}></div>
      ))}
    </>
  );
};
