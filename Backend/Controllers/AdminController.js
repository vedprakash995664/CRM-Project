const Admin = require('../Models/AdminModel');

const AdminSignup = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(500).json({msg:"All fields are required!.. "})
        }
        const admin = new Admin({
            name,
            email,
            password,
        });

        await admin.save();
        res.status(201).json({ msg: 'Admin created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


const AdminLogin= async (req, res) => {
    try {
      
    
    const { email, password } = req.body;

    const client = await Admin.findOne({ email });
    if (!client) {
      return res.status(404).json({message:"Client Not Found"});
    }
    if (client.password !== password) {
      return res.status(400).json({message:"Invalid Password"})
    }
  
    return res.status(200).json({message:"Login Successfully!.."})
  } catch (error) {
    console.log(error);
    
  }
  };
  

module.exports={AdminSignup , AdminLogin};
