import './Chips.scss'

const Chips = (props) => {
  return (
    <button {...props} className='chips'>
      {props.children}
    </button>
  );
};

export default Chips;