const Button = (props) => {
    const classes = "" + props.className
  return (
    <button
      className={classes}
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      onClick={props.onClick}
      onBlur={props.Blur}
    >
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
