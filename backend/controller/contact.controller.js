import Contact from "../model/contact.model.js";


export const contactus = async(req, res) => {
    try {
        const {  firstname,lastname ,company ,email, phonenumber,message} = req.body;
        const contact = await Contact.findOne({ email });
        if (contact) {
            return res.status(400).json({ message: "User already exists" });
        }
       
        const createdContact = new Contact({
            firstname: firstname,
            lastname:lastname,
            company: company,
            email: email,
            phonenumber:phonenumber,
            message:message
        });
        await createdContact.save();
        res.status(201).json({
            message: "User created successfully",
            contact: {
                _id: createdContact._id,
                firstname: createdContact.firstname,
                lastname: createdContact.lastname,
                company:createdContact.company,
                
                email: createdContact.email,
                phonenumber:createdContact.phonenumber,
                message:createdContact.message
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

