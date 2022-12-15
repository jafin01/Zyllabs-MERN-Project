const asyncHandler = require('express-async-handler');

const signup = asyncHandler(async (req, res) => {
  const schoolData = req.body;

  const {_id, name, place, head, contact, email, category, password } = schoolData;

  if(!_id || !name || !place || !head || !contact || !email || !category || !password){
    throw new Error('Please Fill all fields');
  }

});

module.exports = {
  signup,
};
