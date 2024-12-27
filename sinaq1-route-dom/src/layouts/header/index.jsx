import { Link } from "react-router-dom";
import './index.module.scss'

const Header = () => {
  return (
    <div>
     <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
     </ul>
    </div>
  )
}

export default Header
