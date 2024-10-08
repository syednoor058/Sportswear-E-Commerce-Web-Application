// import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const { getCartCount } = useContext(ProductContext);
  const [cartNum, setCartNum] = useState();
  useEffect(() => setCartNum(() => getCartCount()), [getCartCount]);
  return (
    <div className="w-full bg-primaryColor text-secondaryColor px-5 sm:px-10 md:px-16 lg:px-20 py-3 flex items-center shadow-lg">
      <div className="w-full flex flex-row justify-between">
        <Link className="w-[33%] flex flex-col" to="/">
          <div className="font-bold text-xl md:text-2xl">Kick-Off</div>
          <div className="text-xs">The Jersey Galleria</div>
        </Link>
        <div className="w-[33%] hidden lg:visible lg:flex flex-row gap-10">
          <Link to="/" className="flex items-center">
            Home
          </Link>
          <Link to="/collection" className="flex items-center gap-1">
            Products
          </Link>
          <div className="flex items-center gap-1">About</div>
          <div className="flex items-center gap-1">Contact</div>
        </div>
        <div className="w-[33%] flex flex-row gap-5 justify-end">
          <Link to="/cart" className="flex items-center gap-1">
            <span className="relative">
              {cartNum > 0 && (
                <div className="w-[70%] h-[70%] rounded-full bg-red-600 text-primaryColor p-2 absolute -right-1 -top-1 text-[12px] flex justify-center items-center">
                  {cartNum}
                </div>
              )}
              <ShoppingCartOutlinedIcon />
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <span>
              <FavoriteBorderIcon />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <PermIdentityIcon />
            </span>
          </div>
          <div
            className="lg:hidden flex items-center px-3 bg-secondaryColor text-primaryColor rounded cursor-pointer"
            onClick={() => handleToggle()}
          >
            <MenuSharpIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            exit={{ x: "100%", opacity: 1, transition: { duration: 0.5 } }}
            className="w-[50%] h-screen bg-secondaryColor absolute top-0 right-0 text-primaryColor pt-16 flex flex-col items-center justify-start gap-7 text-2xl md:text-4xl"
          >
            <div onClick={() => handleToggle()} className="cursor-pointer">
              <CloseIcon fontSize="large" />
            </div>
            <Link
              to="/"
              onClick={() => handleToggle()}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/collection"
              onClick={() => handleToggle()}
              className="cursor-pointer"
            >
              Products
            </Link>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Contact</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
