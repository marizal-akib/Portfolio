import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
       
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <div className="flex flex-row gap-5 ">
            <Link
              to={"https://github.com/marizal-akib"}
              className=" text-4xl text-indigo-400"
            >
              <FaGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/sayed-mariz-al-akib-426917234/"}
              className=" text-4xl text-indigo-500"
            >
              <FaLinkedin />
            </Link>
          
          </div>
      </nav>
    </footer>
  );
};

export default Footer;
