import { FC } from 'react';
import classNames from 'classnames';

export interface CarType {
  id: number;
  title: string;
  description: string;
  year: number | string;
  color: string;
  status: string;
  price: number | string;
}

interface AvtoListType {
  data: CarType[];
  delAvto: (c: CarType) => void;
}

export const AvtoList: FC<AvtoListType> = ({ data, delAvto }) => {
  const formatStatus = (status: string) => {
    if (status === 'pednding') return 'Ожидается';
    if (status === 'out_of_stock') return 'Нет в наличии';
    if (status === 'in_stock') return 'В наличии';
  };

  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="avtolist">
      <div className="wrapper">
        {data.length === 0 ? (
          <h2 className="avtolist__title">АВТОМОБИЛЕЙ НЕТ В НАЛИЧИИ</h2>
        ) : (
          <>
            <h2 className="avtolist__title">АВТОМОБИЛИ В НАЛИЧИИ</h2>
            <table className="avtolist-table">
              <thead className="avtolist-table__header">
                <tr>
                  <th>Название</th>
                  <th>Год</th>
                  <th>Цвет</th>
                  <th>Статус</th>
                  <th>Цена</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="avtolist-table-content">
                {data &&
                  data.map((car) => (
                    <tr key={car.id}>
                      <th>
                        <p>{car.title}</p>
                        <span>{car.description}</span>
                      </th>
                      <th>{car.year}</th>
                      <th>
                        <div className={classNames('color-table', `color--${car.color}`)}></div>
                      </th>
                      <th>{formatStatus(car.status)}</th>
                      <th>{formatPrice(+car.price)} руб.</th>
                      <th>
                        <button className="avtolist-table__button" onClick={() => delAvto(car)}>
                          Удалить
                        </button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
