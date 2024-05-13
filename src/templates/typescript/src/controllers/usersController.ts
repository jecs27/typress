import { Request, Response } from 'express';
import { generateToken } from '@middleware/auth';
import { validatePassword } from '@utils/cipher';

export const base = async (_req: Request, res: Response) => {
  try {
    return res.status(200).send({ status: 200, message: 'User controller working', data: null });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'An error was generated when trying to get the user controller.',
      data: { error }
    });
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if ((!username && !email) || !password) {
      return res.status(400).send({ status: 400, message: 'Invalid data', data: null });
    }
  
    // change this to your model
    // const validPassword = await validatePassword(password, data.password);
    const validPassword = await validatePassword(password, password);
    if (!validPassword) {
      return res.status(401).send({ status: 401, message: 'Invalid password', data: null });
    }

    const token = await generateToken({ email: email});
    return res.status(200).send({ status: 200, message: 'User logged in', data: { user: {}, token } });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: 'An error was generated when trying to login.',
      data: { error }
    });
  }
};
