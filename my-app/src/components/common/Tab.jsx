export default function Tab({tabData,field,setField}){
    return(
        <div style={{boxShadow:"inset 0px -1px 0px rgba(255, 255, 255, 0.18)"}}
        className="flex bg-blue-700 p-1 gap-x-5 my-6 rounded-full max-w-max">
        {
            tabData.map((tab,index)=>(
                <button key={index}
                onClick={()=>setField(tab?.type)}
                className={`${field === tab?.type ? "text-white text-xl font-bold":"text-white"}`}
                >{tab?.tabName}</button>
            ))
        }

        </div>
    )
}