// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom'
// import { getCardDetails } from '../../../services/operations/authAPI';
// import { ACCOUNT_TYPE } from '../../../utils/constants';

// export const CardDetails = () => {
//     const {cardId} = useParams();
//     const dispatch = useDispatch();
//     const [card,setCard]= useState(null)
//     const {token} = useSelector((state)=>state.auth);
//     const {user} = useSelector((state)=>state.profile)
//     const navigate = useNavigate();

//     useEffect(()=>{
//         const fetchCourseDetails = async() => {
//         const result = await dispatch(getCardDetails(token,cardId));
//         console.log("GET CARD DETAILS RESPONSE",result);
//         setCard(result)
//     }
//     fetchCourseDetails();
//     },[token,cardId])

//   return (
//     <div>
//       <img src={card?.image}/>
//       <p>{card?.hotelName}</p>
//       <p>{card?.discription}</p>
//       <p>{card?.cityName}</p>
//       <p>{card?.countryName}</p>
//       <div>
//       {
//           user?.accountType === ACCOUNT_TYPE.VISITOR && <button className='text-yellow-500 bg-black'>Add Review</button>  
//       }
//       </div>
//     </div>
//   )
// }

//AA CODE
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getCardDetails, createRating } from '../../../services/operations/authAPI';
// import { ACCOUNT_TYPE } from '../../../utils/constants';

// export const CardDetails = () => {
//     const { cardId } = useParams();
//     const dispatch = useDispatch();
//     const { token } = useSelector((state) => state.auth);
//     const { user } = useSelector((state) => state.profile);

//     const [card, setCard] = useState(null);
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState('');
//     const [allReviews, setAllReviews] = useState([]);

//     useEffect(() => {
//         const fetchCardDetails = async () => {
//             const result = await dispatch(getCardDetails(token, cardId));
//             setCard(result);
//         };
//         fetchCardDetails();
//     }, [token, cardId, dispatch]);

//     // Function to handle rating submission
//     const handleSubmitRating = async () => {
//         if (rating === 0 || review.trim() === '') {
//             return alert("Please provide both rating and review");
//         }

//         const data = { rating, review, cardId };
//         const success = await createRating(data, token);

//         if (success) {
//             setRating(0);
//             setReview('');
//             fetchAllReviews(); // refresh review list after adding
//         }
//     };

//     const fetchAllReviews = async () => {
//         try {
//             const response = await fetch(`http://localhost:4000/api/v1/card/getAllRating`); // your backend URL
//             const result = await response.json();
//             if (result.success) {
//                 // Filter reviews for current card
//                 const cardReviews = result.data.filter(r => r.card._id === cardId);
//                 setAllReviews(cardReviews);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         fetchAllReviews();
//     }, [cardId]);

//     return (
//         <div className="p-4">
//             <img src={card?.image} alt={card?.hotelName} className="w-full h-64 object-cover" />
//             <h2 className="text-2xl font-bold">{card?.hotelName}</h2>
//             <p>{card?.discription}</p>
//             <p>{card?.cityName}, {card?.countryName}</p>

//             {user?.accountType === ACCOUNT_TYPE.VISITOR && (
//                 <div className="mt-4">
//                     <h3 className="font-semibold mb-2">Add Your Review</h3>
//                     <div className="flex items-center mb-2">
//                         {[1,2,3,4,5].map((star) => (
//                             <span
//                                 key={star}
//                                 className={`cursor-pointer text-2xl  ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
//                                 onClick={() => setRating(star)}
//                             >
//                                 ★
//                             </span>
//                         ))}
//                     </div>
//                     <textarea
//                         value={review}
//                         onChange={(e) => setReview(e.target.value)}
//                         className="border p-2 w-full mb-2"
//                         placeholder="Write your review..."
//                     />
//                     <button
//                         onClick={handleSubmitRating}
//                         className="bg-yellow-500 text-black px-4 py-2 rounded"
//                     >
//                         Submit Review
//                     </button>
//                 </div>
//             )}

//             <div className="mt-6">
//                 <h3 className="font-semibold text-xl mb-2">All Reviews</h3>
//                 {allReviews.length === 0 && <p>No reviews yet.</p>}
//                 {allReviews.map((r) => (
//                     <div key={r._id} className="border p-2 mb-2">
//                         <p className="font-semibold">{r.user.firstName} {r.user.lastName}</p>
//                         <p className='text-yellow-300'>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
//                         <p>{r.review}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getCardDetails, createRating ,getAllRating} from '../../../services/operations/authAPI';
// import { ACCOUNT_TYPE } from '../../../utils/constants';

// export const CardDetails = () => {
//     const { cardId } = useParams();
//     const dispatch = useDispatch();
//     const { token } = useSelector((state) => state.auth);
//     const { user } = useSelector((state) => state.profile);

//     const [card, setCard] = useState(null);
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState('');
//     const [allReviews, setAllReviews] = useState([]);

//     useEffect(() => {
//         const fetchCardDetails = async () => {
//             const result = await dispatch(getCardDetails(token, cardId));
//             setCard(result);
//         };
//         fetchCardDetails();
//     }, [token, cardId, dispatch]);

//     const handleSubmitRating = async () => {
//         if (rating === 0 || review.trim() === '') {
//             return alert("Please provide both rating and review");
//         }

//         const data = { rating, review, cardId };
//         const success = await createRating(data, token);

//         if (success) {
//             setRating(0);
//             setReview('');
//             fetchAllReviews(); // refresh review list after adding
//         }
//     };

//     // const fetchAllReviews = async () => {
//     //     try {
//     //         const response = await fetch(`http://localhost:4000/api/v1/card/getAllRating`);
//     //         const result = await response.json();
//     //         if (result.success) {
//     //             const cardReviews = result.data.filter(r => r.card._id === cardId);
//     //             setAllReviews(cardReviews);
//     //         }
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // };


//     const fetchAllReviews = async()=>{
//         const result = await dispatch(setAllReviews(getAllRating(token)))
//         setAllReviews(result)
//     }
//     useEffect(() => {
//         fetchAllReviews();
//     }, [cardId]);

//     return (
//         <div className="bg-blue-50 min-h-screen p-6 sm:p-10">
//             <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                     src={card?.image}
//                     alt={card?.hotelName}
//                     className="w-full h-64 sm:h-80 object-cover"
//                 />
//                 <div className="p-6">
//                     <h2 className="text-3xl font-bold text-blue-900 mb-2">{card?.hotelName}</h2>
//                     <p className="text-gray-700 mb-1">{card?.discription}</p>
//                     <p className="text-gray-500 mb-4">{card?.cityName}, {card?.countryName}</p>

//                     {user?.accountType === ACCOUNT_TYPE.VISITOR && (
//                         <div className="mt-6">
//                             <h3 className="font-semibold text-xl text-blue-900 mb-2">Add Your Review</h3>
//                             <div className="flex items-center mb-3">
//                                 {[1,2,3,4,5].map((star) => (
//                                     <span
//                                         key={star}
//                                         className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
//                                         onClick={() => setRating(star)}
//                                     >
//                                         ★
//                                     </span>
//                                 ))}
//                             </div>
//                             <textarea
//                                 value={review}
//                                 onChange={(e) => setReview(e.target.value)}
//                                 className="border border-blue-300 p-3 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                                 placeholder="Write your review..."
//                                 rows={4}
//                             />
//                             <button
//                                 onClick={handleSubmitRating}
//                                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
//                             >
//                                 Submit Review
//                             </button>
//                         </div>
//                     )}

//                     <div className="mt-8">
//                         <h3 className="font-semibold text-2xl text-blue-900 mb-3">All Reviews</h3>
//                         {allReviews.length === 0 && <p className="text-gray-600">No reviews yet.</p>}
//                         {allReviews.map((r) => (
//                             <div key={r._id} className="border border-blue-200 p-4 rounded-md mb-3 bg-blue-50">
//                                 <p className="font-semibold text-blue-900">{r.user.firstName} {r.user.lastName}</p>
//                                 <p className="text-yellow-400 mb-1">
//                                     {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
//                                 </p>
//                                 <p className="text-gray-700">{r.review}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCardDetails, createRating, getAllRating } from '../../../services/operations/authAPI';
import { ACCOUNT_TYPE } from '../../../utils/constants';

export const CardDetails = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [card, setCard] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [allReviews, setAllReviews] = useState([]);

  // Fetch card details on mount or token/cardId change
  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const result = await dispatch(getCardDetails(token, cardId));
        setCard(result);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };
    fetchCardDetails();
  }, [token, cardId, dispatch]);

  // Fetch all reviews and filter by cardId
  const fetchAllReviews = async () => {
    try {
      const reviews = await dispatch(getAllRating(token));
      // Make sure reviews is an array
      if (!Array.isArray(reviews)) {
        console.warn("getAllRating did not return an array:", reviews);
        setAllReviews([]);
        return;
      }

      // Filter reviews for current cardId, converting to strings for safety
      const cardReviews = reviews.filter(
        (r) => String(r.card?._id) === String(cardId)
      );
      setAllReviews(cardReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Fetch reviews on mount or when cardId/token changes
  useEffect(() => {
    fetchAllReviews();
  }, [cardId, token]);

  // Handle submitting a new rating + review
  const handleSubmitRating = async () => {
    if (rating === 0 || review.trim() === '') {
      alert("Please provide both rating and review");
      return;
    }

    try {
      const data = { rating, review, cardId };
      const success = await createRating(data, token);
      if (success) {
        setRating(0);
        setReview('');
        fetchAllReviews(); // Refresh reviews after submit
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={card?.image}
          alt={card?.hotelName}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">{card?.hotelName}</h2>
          <p className="text-gray-700 mb-1">{card?.discription}</p>
          <p className="text-gray-500 mb-4">
            {card?.cityName}, {card?.countryName}
          </p>

          {user?.accountType === ACCOUNT_TYPE.VISITOR && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl text-blue-900 mb-2">Add Your Review</h3>
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-2xl ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="border border-blue-300 p-3 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Write your review..."
                rows={4}
              />
              <button
                onClick={handleSubmitRating}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
              >
                Submit Review
              </button>
            </div>
          )}

          <div className="mt-8">
            <h3 className="font-semibold text-2xl text-blue-900 mb-3">All Reviews</h3>
            {allReviews.length === 0 ? (
              <p className="text-gray-600">No reviews yet.</p>
            ) : (
              allReviews.map((r) => (
                <div
                  key={r._id}
                  className="border border-blue-200 p-4 rounded-md mb-3 bg-blue-50"
                >
                  <p className="font-semibold text-blue-900">
                    {r.user?.firstName || "Unknown"} {r.user?.lastName || ""}
                  </p>
                  <p className="text-yellow-400 mb-1">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                  <p className="text-gray-700">{r.review}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
