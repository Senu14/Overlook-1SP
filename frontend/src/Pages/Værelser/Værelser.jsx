// import React, { useEffect, useState } from 'react';
// import RoomCard from '../../Components/RoomCard/RoomCard';
// import SlideWrapper2 from '../../App/Elements/SlideWrapper/SlideWrapper2';
// import { Link } from 'react-router-dom';
// import './Værelse.scss';
// // import cors from 'cors';
// import axios from 'axios';

// const Værelser = () => {
//   const [card, setcard] = useState([]);
  
//   useEffect(() => {
//     axios.get('http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city') // Make sure this URL is correct
//       .then((response) => {
//         console.log('card data:', response.data);
//         setcard(response.data);
//       })
//       .catch((error) => {
//         console.error('An error occurred while fetching card:', error);
//       });
//   }, []);
  


//   return (
//     <>
//           <SlideWrapper2 />
//     <div className='container'>
//       <div className="wallpaper"></div>
//       <div className="bar">
//         <ul>
//           <li>TEST</li>
//           <li>TEST</li>
//           <li>TEST</li>
//           <li>TEST</li>
//           <li>TEST</li>
//           <li>TEST</li>
//           <li>TEST</li>
//         </ul>
//       </div>
//       <div className="content">
//         {/* <div className="left">
//           <h4>this is left side</h4>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia vero perferendis dignissimos. Iure unde animi alias magnam, praesentium, in atque, voluptates veniam dolorum odio suscipit tempora sit quas repellendus!</p>
//           <div className="cards">
//             {card.map((reservation, index) => (
//               <RoomCard key={index} {...reservation} />
//             ))}
//           </div>
//         </div> */}
//         <div className="right"></div>
//       </div>
//     </div>
//     </>
//  );

// } 
    
  

// export default Værelser;