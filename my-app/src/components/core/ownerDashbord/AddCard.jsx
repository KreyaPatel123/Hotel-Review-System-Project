// import React, { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form"
// import { createCard } from "../../../services/operations/authAPI"
// import Upload from "./Upload"   // 👈 tamaro styled upload component import karo

// const AddCard = () => {
//   const { token } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm()

//   // Form submit handler
//   const onSubmit = async (data) => {
//     setLoading(true)

//     const formData = new FormData()
//     formData.append("hotelName", data.hotelName)
//     formData.append("discription", data.discription)
//     formData.append("countryName", data.countryName)
//     formData.append("cityName", data.cityName)
//     formData.append("image", data.image)  // 👈 Upload component ma setValue thi single file store thay che

//     await dispatch(
//       createCard(
//         navigate,
//         data.hotelName,
//         data.discription,
//         data.countryName,
//         data.cityName,
//         data.image,
//         token
//       )
//     )

//     setLoading(false)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label htmlFor="hotelName">
//           Hotel Name <sup>*</sup>
//         </label>
//         <input
//           id="hotelName"
//           placeholder="Enter Hotel Name"
//           {...register("hotelName", { required: true })}
//           className="w-full border p-2"
//         />
//         {errors.hotelName && (
//           <span className="text-red-500">Hotel Name is Required</span>
//         )}
//       </div>

//       <div>
//         <label htmlFor="discription">
//           Description <sup>*</sup>
//         </label>
//         <input
//           id="discription"
//           placeholder="Enter Description"
//           {...register("discription", { required: true })}
//           className="w-full border p-2"
//         />
//         {errors.discription && (
//           <span className="text-red-500">Description is Required</span>
//         )}
//       </div>

//       <div>
//         <label htmlFor="countryName">
//           Country Name <sup>*</sup>
//         </label>
//         <input
//           id="countryName"
//           placeholder="Enter Country Name"
//           {...register("countryName", { required: true })}
//           className="w-full border p-2"
//         />
//         {errors.countryName && (
//           <span className="text-red-500">Country Name is Required</span>
//         )}
//       </div>

//       <div>
//         <label htmlFor="cityName">
//           City Name <sup>*</sup>
//         </label>
//         <input
//           id="cityName"
//           placeholder="Enter City Name"
//           {...register("cityName", { required: true })}
//           className="w-full border p-2"
//         />
//         {errors.cityName && (
//           <span className="text-red-500">City Name is Required</span>
//         )}
//       </div>

//       {/* Image Upload with style */}
//       <Upload
//         name="image"
//         label="Upload Image"
//         register={register}
//         setValue={setValue}
//         errors={errors}
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         {loading ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   )
// }

// export default AddCard


import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { createCard } from "../../../services/operations/authAPI"
import Upload from "./Upload"

const AddCard = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)

    await dispatch(
      createCard(
        navigate,
        data.hotelName,
        data.discription,
        data.countryName,
        data.cityName,
        data.image,
        token
      )
    )

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-slate-800">
          Add New Card
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Fill the details below to create a new card
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-5"
        >
          {/* Hotel Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Hotel Name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter hotel name"
              {...register("hotelName", { required: true })}
              className="w-full rounded-md border border-slate-300 px-4 py-2.5
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition"
            />
            {errors.hotelName && (
              <p className="mt-1 text-sm text-red-500">
                Hotel name is required
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              placeholder="Enter description"
              {...register("discription", { required: true })}
              className="w-full rounded-md border border-slate-300 px-4 py-2.5
              focus:border-blue-600 focus:ring-1 focus:ring-blue-600
              outline-none transition resize-none"
            />
            {errors.discription && (
              <p className="mt-1 text-sm text-red-500">
                Description is required
              </p>
            )}
          </div>

          {/* Country & City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Country Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter country name"
                {...register("countryName", { required: true })}
                className="w-full rounded-md border border-slate-300 px-4 py-2.5
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
              {errors.countryName && (
                <p className="mt-1 text-sm text-red-500">
                  Country name is required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                City Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter city name"
                {...register("cityName", { required: true })}
                className="w-full rounded-md border border-slate-300 px-4 py-2.5
                focus:border-blue-600 focus:ring-1 focus:ring-blue-600
                outline-none transition"
              />
              {errors.cityName && (
                <p className="mt-1 text-sm text-red-500">
                  City name is required
                </p>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <Upload
            name="image"
            label="Upload Image"
            register={register}
            setValue={setValue}
            errors={errors}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white
            hover:bg-blue-700 active:scale-[0.99] transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Create Card"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
