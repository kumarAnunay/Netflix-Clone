// import Box from "@mui/material/Box";
// import { useState, useEffect } from "react";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import axios from "axios";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const ContentDetailsModal = ({ isOpen, onClose, showId }) => {
//   const [contentDetails, setContentDetails] = useState(null);

//   useEffect(() => {
//     const fetchShowData = async () => {
//       try {
//         const response = await axios.get(
//           `https://academics.newtonschool.co/api/v1/ott/show/${showId}`,
//           {
//             headers: {
//               projectId: "lb0fl09ncsvt",
//             },
//           }
//         );

//         setContentDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching show data:", error);
//       }
//     };

//     if (showId) {
//       fetchShowData();
//     }
//   }, [showId]);

//   useEffect(() => {
//     console.log(contentDetails); // Log the updated contentDetails
//   }, [contentDetails]);

//   return (
//     <div>
//       <Modal
//         open={isOpen}
//         onClose={onClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             {contentDetails?.title} {/* Display title from contentDetails */}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             {contentDetails?.description}{" "}
//             {/* Display description from contentDetails */}
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ContentDetailsModal;
