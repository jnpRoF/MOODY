const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;

// if the className is not dynamic it will become an array right?

// so i think that a difference between components cnd functions is that the parameters in functions must be put accordingly while in functions it can be anywhere as far as the name is correct
