const crypto = require('crypto');
const DataAccess = require('./database/DataAccess');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Fetch user from the database using email
    const users = await DataAccess.login(email);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    const user = users[0];
    // Hash the received password using MD5
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    // Compare the MD5 hash of the input password with the stored hash
    if (hashedPassword !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};



exports.addWeaver = async (req, res) => {
  const { weaverName, createdDate, deleteFlag } = req.body;

  try {
    const result = await DataAccess.addWeaver(weaverName, createdDate, deleteFlag);
    res.status(200).json({ message: 'Weaver added successfully', insertId: result.insertId });
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).json({ message: 'Failed to add weaver', error: err.message });
  }
};

exports.addWeaverDesign = async (req, res) => {
  const { weaverName, qty, createdDate ,design_name } = req.body;

  if (
    typeof weaverName !== 'string' || weaverName.trim() === '' ||
    typeof createdDate !== 'string' || createdDate.trim() === '' ||
    typeof design_name !== 'string' || design_name.trim() === '' ||
    typeof qty !== 'number'
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  

  try {
    const result = await DataAccess.addWeaverDesign(weaverName, qty, createdDate, design_name);
    res.status(200).json({
      message: "Weaver design added successfully",
      insertId: result.insertId,
    });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ message: "Failed to add weaver design", error: error.message });
  }
};

