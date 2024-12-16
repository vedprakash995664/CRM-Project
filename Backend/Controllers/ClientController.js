const Client = require('../Models/ClientModel');

// Login the user
const loginClient = async (req, res) => {
  try {
    
  
  const { email, password } = req.body;

  // Find user by username
  const client = await Client.findOne({ email });
  if (!client) {
    return res.status(404).json({message:"Client Not Found"});
  }
  // Check if the password matches (no hashing in this case)
  if (client.password !== password) {
    return res.status(400).json({message:"Invalid Password"})
  }

  return res.status(200).json({message:"Login Successfully!.."})
} catch (error) {
  console.log(error);
  
}
};

module.exports = {  loginClient };
