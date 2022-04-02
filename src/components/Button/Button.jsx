import './Button.scss'

const Button = (props) => {
  return (
    <button { ...props } className={ `button button__${props.color}` }>
      {props.children}
    </button>
  );
};

export default Button;