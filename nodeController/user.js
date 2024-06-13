const axios = require('axios');
const router = express.Router;

router.post('/create_user', async function(req,res){
    const {username, password, email} = req.body;

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/create/', {
            username: username,
            password: password,
            email: email,
        });

        console.log('User added:', response.data);
        res.status(200).json(response.data); // Send back response from Django API
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(500).json({ error: 'Failed to create user' });
    }
});




module.exports = router;