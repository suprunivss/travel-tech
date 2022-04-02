import './Input.scss'

const Input = (props) => {
  return (
    <div className='input'>
      <input type='text' placeholder={props.placeholder} className='input__text'/>
      <button className='input__button'/>
    </div>
  );
};

export default Input;