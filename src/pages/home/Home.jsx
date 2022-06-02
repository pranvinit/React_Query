import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <Link to="/todos" className="entity">
          <div className="option">Todos</div>
        </Link>
        <Link to="/comments" className="entity">
          <div className="option">Comments</div>
        </Link>
        <Link to="/posts" className="entity">
          <div className="option">Posts</div>
        </Link>
      </div>
    </div>
  );
}
