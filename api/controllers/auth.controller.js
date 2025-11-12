import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

// REGISTER
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //   hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //   Create a new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User Created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create the user!!" });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // CHECK IF THE USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("Login Successful");
    const age = 24 * 60 * 60 * 1000 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age, // 7 day
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
};

// LOGOUT
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
