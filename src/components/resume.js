import Myresume from "../assets/images/resume.png"

import React from 'react'
// import { Document } from "react-pdf";
// import PDF from '../assets/pdf/Kyle_Carter_Resume.pdf'
function Resume() {
    // const { pdf } = props;
    // return(
    //     <>
    //         <Document 
    //         file={PDF}
    //         options={{ workerSrc: "../../pdf.worker.js" }}
    //         onLoadSuccess={<h1>it worked</h1>} 
    //         >
                
    //         </Document>
    //     </>
    // )
    return (
        <section className='resume'>
            <img src={Myresume} alt='resume' className="resume"></img>
        </section>
    )
}

export default Resume;