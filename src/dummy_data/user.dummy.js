import { config } from "dotenv";
config();
import { connectDB } from "../lib/db.js";
import bcrypt from "bcryptjs";

import User from "../models/user.model.js";



const seedUsers = [
  // Female Users
  {
    email: "suman@example.com",
    fullName: "Suman Singh",
    password: await bcrypt.hash("123456", 10),
     profilePic: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    email: "vinita@example.com",
    fullName: "Vinita Sharma",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    email: "karina@example.com",
    fullName: "Karina Khanna",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    email: "kajal@example.com",
    fullName: "Kajal Verma ",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/94.jpg",
  },
  {
    email: "meghna@example.com",
    fullName: "Meghna Paul",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    email: "rasmika@example.com",
    fullName: "Rasmika Dubey",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    email: "sonam@example.com",
    fullName: "Sonam Singh",
    password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    email: "kiran@example.com",
    fullName: "Kiran Verma",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
  },

  // Male Users
  {
    email: "sumeet@example.com",
    fullName: "Sumeet Sharma",
   password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    email: "vikas@example.com",
    fullName: "Vikas Verma",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    email: "shivam@example.com",
    fullName: "Shivam Singh",
  password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    email: "alok@example.com",
    fullName: "Alok Kumar",
    password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/94.jpg",
  },
  {
    email: "sikhar@example.com",
    fullName: "Sikhar Khanna",
    password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    email: "virat@example.com",
    fullName: "Virat Singh",
     password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    email: "rohit@example.com",
    fullName: "Rohit Sharma",
    password: await bcrypt.hash("123456", 10),
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    

    // await User.deleteMany({});
    
    await User.insertMany(seedUsers);
    console.log("Database updated successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
