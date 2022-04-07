import Slider from '../Slider/Slider';
import './Main.scss';
import Chips from '../Chips/Chips';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useReducer } from 'react';

const Main = () => {
  const buttonsValue = [{
    button: 'Пляжи',
    placeholder: 'Поиск по стране, региону, городу, название пляжа',
  }, {
    button: 'Breezzor Pass',
    placeholder: 'Поиск по стране, региону, городу, названию отеля',
  }, {
    button: 'Впечатления',
    placeholder: 'Поиск по стране, региону, городу, названию впечатления',
  }, {
    button: 'Маршруты',
    placeholder: 'Поиск по стране, региону, городу, названию маршрута',
  }];

  const [state, dispatch] = useReducer(
    reducer,
    buttonsValue[0],
  );

  function reducer(state, action) {
    switch (action.type) {
      default:
        return action.payload;
    }
  }

  function dispatchValue(index) {
    dispatch({
      payload: buttonsValue[index],
    });
  }

  return (
    <div className="main">
      <div className="main__slider">
        <Slider/>
      </div>
      <div className="main__chips container">
        { buttonsValue.map((item, index) => {
          return (
            <Chips key={ index } active={ state.button } onClick={ () => dispatchValue(index) }>
              { item.button }
            </Chips>
          );
        }) }
      </div>
      <div className="main__input container">
        <Input placeholder={ state.placeholder }/>
      </div>
      <div className="main__buttons container">
        <Button color="white">
          На карте
        </Button>
        <Button color="blue">
          Все пляжи страны
        </Button>
      </div>
    </div>
  );
};

export default Main;