import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const userLogin = async (req, res) => { 
  try { 
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }
    const user = await User.findOne({email: email});

    if (!user) {
      return res.status(404).json({ success: false, message: 'Email not found.' });
    } 

    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid) {
      return res.status(401).json({ success: false, message: 'Invalid password.' });
    }

    const key = process.env.JWT_SECRET;
    const token = jwt.sign({ user_id: user._id, email: email }, key, { expiresIn: '24h' });
    console.log(token);

    res.cookie('token', token, { httpOnly: true });

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      // user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ success: false, message: 'User already registered.' });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Fill all the fields.' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.status(201).json({ success: true, message: 'Successfully registered.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { userLogin, userRegister };
