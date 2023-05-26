import { FiDownload } from "react-icons/fi";
import "./cvBtn__dark.css";

const CVBtn = () => {
  return (
    <button className="cv">
      Download CV <FiDownload className="icon" />
    </button>
  );
};
export default CVBtn;
