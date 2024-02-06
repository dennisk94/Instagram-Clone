import { getYear } from "../../Utilities/getDates";

const Footer = () => {
  return (
    <footer className="footer">
        <p className="copyright-text">
        &copy; { getYear() } || Dennis Kim
        </p>
    </footer>
  )
}

export default Footer