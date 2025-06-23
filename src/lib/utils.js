import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    secure: true,
    // sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    sameSite: "None",
    // secure: process.env.NODE_ENV !== "development",
    
  });

  return token;
};
