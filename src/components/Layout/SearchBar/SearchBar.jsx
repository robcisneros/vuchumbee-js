import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Meals from "../../Meals/Meals";
import MealItem from "../../Meals/MealItem/MealItem";
import BTcarosuel from "../../Meals/MealItem/BTcarousel";
import ProductsTypeList from "../../Meals/Products/ProductsTypeList";

const SearchBar = (props) => {
  const promosSlices = [
  "https://cazaofertas.com.mx/wp-content/uploads/2020/03/Las-Alitas-Boneless-020320-01-1.jpg",
  "https://static.promodescuentos.com/threads/raw/default/165558_1/re/1024x1024/qt/60/165558_1.jpg",
  "https://cazaofertas.com.mx/wp-content/uploads/2014/10/wendys_2x1_miercoles_gallery.jpg"
];

  console.log("products",props.products);

  return (
    // <Fragment>
    //   <div className="flex flex-row flex-wrap w-full justify-center pt-24 pb-4">
    //     <div className="px-6 sm:w-1/2 w-4/5 lg:w-1/4 rounded-lg sm:mx-auto h-20 items-center flex flex-col justify-center">
    //       <p className="font-bold flex flex-wrap flex-row w-full mb-4">
    //         Filtra por tamaño o descripción:
    //       </p>
    //       <form
    //         action=""
    //         className="relative mx-auto flex flex-wrap flex-row w-full"
    //       >
    //         <input
    //           type="search"
    //           onChange={searchChangeHandler}
    //           name="search"
    //           id="search"
    //           className="relative peer bg-transparent w-full h-12 rounded-full border cursor-pointer outline-none focus:w-full focus:border-orange-500 focus:cursor-text focus:pl-14 duration-700"
    //         />

    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="absolute inset-y-0 w-12 h-8 my-auto px-3.5 stroke-gray-500 border-r border-transparent peer-focus:border-orange-500 peer-focus:stroke-orange-500"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    //           />
    //         </svg>
    //       </form>
    //     </div>
    //   </div>
    //   <Meals content={content} />
    // </Fragment>

    // <Meals content={content} />
    <Fragment>
      <div className="pt-24">
      <BTcarosuel items={promosSlices} /> 
      </div>
      
      <ProductsTypeList listType={props.products} />
    </Fragment>
    
  );
};
export default SearchBar;
