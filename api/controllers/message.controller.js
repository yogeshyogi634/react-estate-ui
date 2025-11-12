// import { prisma } from "../lib/prisma.js";

export const addMessage = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message" });
  }
};
