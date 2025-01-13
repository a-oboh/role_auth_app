import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import DB from '../database/index.js';

export async function register(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await DB.User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered', user });
}

export async function login(req, res) {
    const { email, password } = req.body;

    const user = await DB.User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });
}
