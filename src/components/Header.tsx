import { FC } from 'react';
import logo from '../assets/image/DUCK.png';

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__image">
          <img src={logo} alt="LOGO" />
        </div>
      </div>
    </div>
  );
};
