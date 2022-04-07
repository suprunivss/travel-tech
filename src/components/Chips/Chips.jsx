import './Chips.scss'

const Chips = (props) => {
  const active = props.active === props.children ? 'chips__checked' : ''

  return (
    <button {...props} className={ `chips ${ active }` }>
      {props.children}
    </button>
  );
};

export default Chips;