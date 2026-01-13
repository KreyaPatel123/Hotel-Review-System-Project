// AA CODE
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllCard } from "../../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

export const ShowCard = () => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const {token} =  useSelector((state)=>state.auth)
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCards = async () => {
      const result = await dispatch(showAllCard(token));
      setCards(result);
    };
    fetchCards();
  }, [dispatch, token]);

  return (
    <div className="text-black p-6">
      <h1 className="text-2xl font-bold mb-4">All Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div
              key={card._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <img
                src={card.image}
                alt={card.hotelName}
                // me app.js ma aa <Route path='/add-card/show-card/:cardId' element={<ShowCard/>}/>
                //path pass karyo che athi hu je card ni image pr click karis te card ni id mane
                //url ma dekhase...and te card ni badhi j detail hu joi sakis page pr
                
                onClick={()=>navigate(`/add-card/show-card/${card._id}`)}
                className="w-full h-80 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{card.hotelName}</h2>
              <p className="text-gray-600">{card.discription}</p>
              <p className="text-sm text-gray-500">
                {card.cityName}, {card.countryName}
              </p>
            </div>
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </div>
  );
};


//AA MARO LAKHELO CODE CHE JE COMPLETE DATA TO FETCH KARE CHE PN TEMA STYLING APPLY NAI KARI
// import React, { useEffect, useState } from 'react'
// import {useDispatch, useSelector} from "react-redux"
// import { showAllCard } from '../../../services/operations/authAPI';

// export const ShowCard = () => {
//   // const dispatch = useDispatch();
//    const dispatch = useDispatch();
//   const [cards,setCards]= useState([]);
//   const {token} = useSelector((state)=>state.auth);

//   useEffect(()=>{
//     const fetchCardData = async() => {
//       const result = await dispatch(showAllCard(token));
//       setCards(result)
//     }
//     fetchCardData();
//   },[dispatch,token])
//   return (
//     <div className='flex flex-col'>
//       {
//         cards.map((card)=>(
//           <div>
//             <img src={card?.image}/>
//             <p>{card?.hotelName}</p>
//             <p>{card?.description}</p>
//             <p>{card?.countryName}</p>
//             <p>{card?.cityName}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }
