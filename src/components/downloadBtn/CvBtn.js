import React from 'react';
import {FiDownload} from 'react-icons/fi';
import '../downloadBtn/cvBtn__dark.css'; 
import '../downloadBtn/cvBtn__light.css';

const CvBtn=()=>{
  return <button className="cv">Download CV <FiDownload className="icon"/></button>}
export default CvBtn;