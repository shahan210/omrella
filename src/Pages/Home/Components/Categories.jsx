import React from "react";
import Guide from "../../../assets/PNG/destination 1.png";
import Weather from "../../../assets/PNG/cloudy 1.png";
import EasyBooking from "../../../assets/PNG/booking 1.png";
import CategoryCards from "./Cards";
import { motion } from "framer-motion";
const Categories = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0, scale: 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full grid grid-cols-4 my-32 p-2 gap-2 overflow-auto"
    >
      <div className="flex flex-col gap-3 justify-center w-fit items-center">
        <p className="sideheading">Services</p>
        <div className="sideDesc">
          <p>Our top value</p>
          <p>categories</p>
          <p>for you</p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.99 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" col-span-3  flex gap-7 flex-nowrap overflow-visible"
      >
        <CategoryCards
          Image={Guide}
          Title={"Best Tour Guide"}
          Desc={"What looked like a small patch of purple grass, above five feet."}
        />
        <CategoryCards
          Image={EasyBooking}
          Title={"Easy Booking"}
          Desc={"Square, was moving across the sand in their direction."}
        />
        <CategoryCards
          Image={Weather}
          Title={"Weather Forecast"}
          Desc={"What looked like a small patch of purple grass, above five feet."}
        />{" "}
      </motion.div>
    </motion.section>
  );
};

export default Categories;
