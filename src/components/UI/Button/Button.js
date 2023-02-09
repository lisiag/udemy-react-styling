import styles from "./Button.module.css"; // import classes

// When css modules are used, React creates unique classnames:
// <component name>_<classname from css file>__<some unique hash>
// e.g. in this case Button_button__2lgkF

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
