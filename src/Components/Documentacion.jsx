// import React, {useState} from "react";
// import {Document, Page} from "react-pdf";

// function Documentacion() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const handlePageChange = (newPageNumber) => {
//     setPageNumber(newPageNumber);
//   };

//   return (
//     <>
//       <div>
//         <Document
//           file="../G2_Presentacion.pdf"
//           onLoadSuccess={({numPages}) => setNumPages(numPages)}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Página {pageNumber} de {numPages}
//         </p>
//         <button onClick={() => handlePageChange(pageNumber - 1)}>
//           Anterior
//         </button>
//         <button onClick={() => handlePageChange(pageNumber + 1)}>
//           Siguiente
//         </button>
//       </div>
//     </>
//   );
// }

// export default Documentacion;
