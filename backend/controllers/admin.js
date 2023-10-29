import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../model/admin.js';

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin .findOne({ email });

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Email not found.' });
    }

    const isPassValid = await bcrypt.compare(password, admin.password);

    if (!isPassValid) {
      return res.status(401).json({ success: false, message: 'Invalid password.' });
    }

    const key = process.env.JWT_SECRET;
    const token = jwt.sign({ admin_id: admin._id, email }, key, { expiresIn: '24h' });

    res.cookie('token', token, { httpOnly: true });

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      admin,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin) {
      return res.status(409).json({ success: false, message: 'Admin already registered.' });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Fill all the fields.' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newAdmin = new Admin({
        name,
        email,
        password: hashedPassword,
      });
      await newAdmin.save();
      return res.status(201).json({ success: true, message: 'Successfully registered.' });
    }
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { adminLogin, adminRegister };
