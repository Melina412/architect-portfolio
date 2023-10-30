import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button>
      <Link to={props.link}>
        <p>
          {props.text}
          <span>⟶</span>
        </p>
      </Link>
    </button>
  );
};

export default Button;
