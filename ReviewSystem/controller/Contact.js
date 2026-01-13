const Contact = require("../model/Contact");

exports.createContact = async(request,response) => {
    try{

        const{firstName,lastName,email,contactNumber,cityName,countryName,about} = request.body;
        if(!firstName || !lastName || !email || !contactNumber ||!cityName ||!countryName ||!about) {
            return response.status(404).json({
            success:false,
            message:"All fields are Required"
        })
        }

        //craete an entry in database
        const contactData = await Contact.create({
            firstName,
            lastName,
            email,
            about,
            contactNumber,
            cityName,
            countryName
        });

        //return response
        return response.status(200).json({
            success:true,
            message:"Contact Send/Created Successfully",
            data:contactData,
        })


    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}