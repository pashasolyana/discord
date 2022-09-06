const postInvite = async(req, res) =>{
    const {targetMailAddress} = req.body;

    return res.send('conntroller is working')
}

module.exports = postInvite