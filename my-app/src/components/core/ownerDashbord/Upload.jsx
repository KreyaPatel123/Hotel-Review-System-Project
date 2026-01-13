// import { useEffect, useRef, useState } from "react"
// import { useDropzone } from "react-dropzone"
// import { FiUploadCloud } from "react-icons/fi"

// export default function Upload({
//   name,
//   label,
//   register,
//   setValue,
//   errors,
//   viewData = null,
//   editData = null,
// }) {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [previewSource, setPreviewSource] = useState(
//     viewData ? viewData : editData ? editData : ""
//   )
//   const inputRef = useRef(null)

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0]
//     if (file) {
//       previewFile(file)
//       setSelectedFile(file)
//     }
//   }

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: { "image/*": [".jpeg", ".jpg", ".png"] },
//     onDrop,
//   })

//   const previewFile = (file) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () => {
//       setPreviewSource(reader.result)
//     }
//   }

//   useEffect(() => {
//     register(name, { required: true })
//   }, [register, name])

//   useEffect(() => {
//     setValue(name, selectedFile)
//   }, [selectedFile, name, setValue])

//   return (
//     <div className="flex flex-col space-y-2">
//       <label className="text-sm text-gray-700" htmlFor={name}>
//         {label} {!viewData && <sup className="text-red-500">*</sup>}
//       </label>

//       <div
//         className={`${
//           isDragActive ? "bg-gray-200" : "bg-gray-100"
//         } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-gray-400`}
//       >
//         {previewSource ? (
//           <div className="flex w-full flex-col p-6">
//             <img
//               src={previewSource}
//               alt="Preview"
//               className="h-full w-full rounded-md object-cover"
//             />
//             {!viewData && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPreviewSource("")
//                   setSelectedFile(null)
//                   setValue(name, null)
//                 }}
//                 className="mt-3 text-gray-500 underline"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         ) : (
//           <div
//             className="flex w-full flex-col items-center p-6"
//             {...getRootProps()}
//           >
//             <input {...getInputProps()} ref={inputRef} />
//             <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-300">
//               <FiUploadCloud className="text-2xl text-gray-700" />
//             </div>
//             <p className="mt-2 max-w-[200px] text-center text-sm text-gray-600">
//               Drag and drop an image, or click to{" "}
//               <span className="font-semibold text-gray-800">Browse</span> a file
//             </p>
//             <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-gray-500">
//               <li>Supported: JPG, JPEG, PNG</li>
//               <li>Recommended size: 1024x576</li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {errors[name] && (
//         <span className="ml-2 text-xs tracking-wide text-red-500">
//           {label} is required
//         </span>
//       )}
//     </div>
//   )
// }
import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  viewData = null,
  editData = null,
}) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop,
  })

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  useEffect(() => {
    register(name, { required: true })
  }, [register, name])

  useEffect(() => {
    setValue(name, selectedFile)
  }, [selectedFile, name, setValue])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-gray-700" htmlFor={name}>
        {label} <sup className="text-red-500">*</sup>
      </label>

      {/* getRootProps here */}
      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "bg-gray-200" : "bg-gray-100"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-gray-400`}
      >
        {/* hidden file input with getInputProps */}
        <input {...getInputProps()} />

        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            <img
              src={previewSource}
              alt="Preview"
              className="h-full w-full rounded-md object-cover"
            />
            <button
              type="button"
              onClick={() => {
                setPreviewSource("")
                setSelectedFile(null)
                setValue(name, null)
              }}
              className="mt-3 text-gray-500 underline"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex w-full flex-col items-center p-6">
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-300">
              <FiUploadCloud className="text-2xl text-gray-700" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-gray-600">
              Drag and drop an image, or click to{" "}
              <span className="font-semibold text-gray-800">Browse</span> a file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-gray-500">
              <li>Supported: JPG, JPEG, PNG</li>
              <li>Recommended size: 1024x576</li>
            </ul>
          </div>
        )}
      </div>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-red-500">
          {label} is required
        </span>
      )}
    </div>
  )
}
