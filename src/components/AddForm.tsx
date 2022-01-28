import React, { FC } from 'react';
import { SelectColor } from './SelectColor';
import classNames from 'classnames';
import { CarType } from './AvtoList';
import { MyInput } from './MyInput';

interface AddFormType {
  onAddAvto: (nc: CarType) => void;
}

export const AddForm: FC<AddFormType> = ({ onAddAvto }) => {
  const statusTitle = ['in_stock', 'pednding', 'out_of_stock'];
  const [status, setStatus] = React.useState(false);
  const [createAvto, setCreateAvto] = React.useState<CarType>({
    id: Date.now(),
    title: '',
    description: '',
    year: '',
    color: '',
    status: '',
    price: '',
  });

  const formatStatus = (status: string) => {
    if (status === 'pednding') return 'Ожидается';
    if (status === 'out_of_stock') return 'Нет в наличии';
    if (status === 'in_stock') return 'В наличии';
  };
  const handleSubmit = () => {
    if (
      createAvto.title &&
      createAvto.year &&
      createAvto.color &&
      createAvto.status &&
      createAvto.price
    ) {
      addAvto();
      alert('Авто добавлено');
    } else {
      alert('Заполните все поля');
    }
  };

  const addAvto = () => {
    onAddAvto(createAvto);
    setCreateAvto({
      id: Date.now(),
      title: '',
      description: '',
      year: '',
      color: '',
      status: '',
      price: '',
    });
  };

  return (
    <div className="addform">
      <div className="wrapper">
        <h2 className="addform__title">¡Ay caramba!</h2>
        <div className="addform__inputs">
          <MyInput
            placeholder={'Название'}
            type={'text'}
            value={createAvto.title}
            onChangeMyInput={(event: string) => setCreateAvto({ ...createAvto, title: event })}
          />
          <MyInput
            placeholder={'Год'}
            type={'number'}
            value={createAvto.year}
            onChangeMyInput={(event: string) => setCreateAvto({ ...createAvto, year: event })}
          />
          <MyInput
            placeholder={'Цена'}
            type={'number'}
            value={createAvto.price}
            onChangeMyInput={(event: string) => setCreateAvto({ ...createAvto, price: event })}
          />
          <MyInput
            placeholder={'Описание'}
            type={'text'}
            value={createAvto.description}
            onChangeMyInput={(event: string) =>
              setCreateAvto({ ...createAvto, description: event })
            }
          />
        </div>
        <div className="addform-picks">
          <div className="addform-colors">
            <p className="addform-colors__text">Цвет</p>
            <SelectColor
              selectC={createAvto.color}
              onChangeColor={(c: string) => setCreateAvto({ ...createAvto, color: c })}
            />
          </div>
          <div className="addform-status" onClick={() => setStatus(!status)}>
            {status ? (
              <>
                <div className="addform-status__item">
                  <p>{createAvto.status ? formatStatus(createAvto.status) : 'Статус'}</p>
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 4L8 0H0L4 4Z"
                      fill="#3B3B3B"
                    />
                  </svg>
                </div>
                {statusTitle.map((st) => (
                  <div
                    key={st}
                    className="addform-status__item"
                    onClick={() => setCreateAvto({ ...createAvto, status: st })}>
                    {formatStatus(st)}
                  </div>
                ))}
              </>
            ) : (
              <div
                className={classNames(
                  'addform-status-noselect',
                  `${createAvto.status && 'addform-status-noselect-active'}`,
                )}>
                <p>{createAvto.status ? formatStatus(createAvto.status) : 'Статус'}</p>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 4L8 0H0L4 4Z" fill="#3B3B3B" />
                </svg>
              </div>
            )}
          </div>
          <button className="addform__button" onClick={() => handleSubmit()}>
            отправить
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.46249 1.33332C-0.0221646 1.85337 -0.0221646 2.69327 0.46249 3.21332L4.88749 7.99999L0.46249 12.72C-0.0221646 13.24 -0.0221646 14.0799 0.46249 14.6C0.697198 14.8524 1.01669 14.9944 1.34999 14.9944C1.68329 14.9944 2.00278 14.8524 2.23749 14.6L7.53749 8.94665C7.77413 8.6963 7.90724 8.3555 7.90724 7.99999C7.90724 7.64447 7.77413 7.30368 7.53749 7.05332L2.23749 1.33332C2.00278 1.0809 1.68329 0.938922 1.34999 0.938922C1.01669 0.938922 0.697198 1.0809 0.46249 1.33332Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
