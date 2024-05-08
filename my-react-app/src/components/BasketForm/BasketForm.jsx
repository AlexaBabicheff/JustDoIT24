import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./BasketForm.module.css";
import { useSelector } from "react-redux";

const BasketForm = ({ handleAddUser }) => {
  const { register, handleSubmit, formState: { errors, defaultValues, isSubmitSuccessful, isSubmitting, isValid, }, reset, getValues, } = useForm();
  const totalItems = useSelector((state) => state.basket.totalItems);
  const totalPrice = useSelector((state) => {
    const { totalPrice } = state.basket;
    return totalPrice !== null && !isNaN(totalPrice) ? totalPrice : 0;
  });
  const [countItems, setCountItems] = useState(totalItems);

  const handleUserSubmit = (data) => {
    handleAddUser(data);
    reset();
  };

  useEffect(() => {
    // Update totalItems and totalPrice when the basket changes
    setCountItems(totalItems);
  }, [totalItems]);

  const handleAddToCart = () => {
    setCountItems(countItems + 1);
    // Logic for adding item to the basket using dispatch and appropriate action creators
  };

  console.log(getValues());

  return (
    <div className={classes.basket_form}>
      <h3>Order details</h3>
      <p>{totalItems} items</p>
      <div className={classes.totalSum}>
        <p>Total {totalPrice}</p>
        <h2>Price</h2>
      </div>
      <form
        onSubmit={handleSubmit(handleUserSubmit)}
        className={classes.basketForm} >
        <label htmlFor="firstName">
          <input
            id="firstName"
            type="text"
            {...register("firstName", {
              required: true,
              minLength: {
                value: 4,
                message: "The name must be longer than 3 letters",
              },
              maxLength: {
                value: 10,
                message: "The name must be shorter than 10 letters",
              },
            })}
            className={classes.firstName}
            placeholder="     Name"/>
        </label>
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        <label htmlFor="phone">
          <input
            id="phone"
            type="tel"
            {...register("phoneNumber", {
              required: "This field is important",
              pattern: {
                value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                message: "Enter please german number",
              },
            })}
            className={classes.phoneNumber}
            placeholder="     Phone number"/>
        </label>
        <p style={{ color: "red" }}>{errors.phone?.message}</p>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "This field is important",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email is wrong. Add please point and domain",
              },
            })}
            className={classes.email}
            placeholder="     Email"/>
        </label>
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <button type="submit" disabled={isSubmitting}>
          Order
        </button>
        <p>{isSubmitSuccessful && "Thanks!"}</p>
      </form>
    </div>
  );
};

export default BasketForm;
 


// import React, {useState} from "react";
// import { useForm } from "react-hook-form";
// import classes from "./BasketForm.module.css";
// import { useSelector } from "react-redux";

// const BasketForm = ({ handleAddUser }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: {
//       errors,
//       defaultValues,
//       isSubmitSuccessful,
//       isSubmitting,
//       isValid,
//     },
//     reset,
//     getValues,
//   } = useForm({});

//   const totalItems = useSelector((state) => state.basket.totalItems);
//   const totalPrice = useSelector((state) => state.basket.totalPrice);

//   const [countItems, setCountItems] = useState([]);

//   const handleUserSubmit = (data) => {
//     handleAddUser(data);
//     reset();
//   };

//     const handleAddToCart = () => {
//     setCountItems(countItems + 1);
//     // Логика добавления товара в корзину, используя dispatch и соответствующие action creators
//   };

//   console.log(getValues());
//   return (
//     <div className={classes.basket_form}>
//       <h3>Order details</h3>
//       <p>{totalItems} items</p>
//       <div className={classes.totalSum}>
//         <p>Total {totalPrice}</p>
//         <h2>Price</h2>
//       </div>
//       <form
//         onSubmit={handleSubmit(handleUserSubmit)}
//         className={classes.basketForm} >
//         <label htmlFor="firstName">
//           <input
//             id="firstName"
//             type="text"
//             {...register("firstName", {
//               required: true,
//               minLength: {
//                 value: 4,
//                 message: "The name must be longer than 3 letters",
//               },
//               maxLength: {
//                 value: 10,
//                 message: "The name must be shorter than 10 letters",
//               },
//             })}
//             className={classes.firstName}
//             placeholder="     Name"/>
//         </label>
//         <p style={{ color: "red" }}>{errors.firstName?.message}</p>
//         <label htmlFor="phone">
//           <input
//             id="phone"
//             type="tel"
//             {...register("phoneNumber", {
//               required: "This field is important",
//               pattern: {
//                 value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
//                 message: "Enter please german number",
//               },
//             })}
//             className={classes.phoneNumber}
//             placeholder="     Phone number"/>
//         </label>
//         <p style={{ color: "red" }}>{errors.phone?.message}</p>
//         <label htmlFor="email">
//           <input
//             id="email"
//             type="email"
//             {...register("email", {
//               required: "This field is important",
//               pattern: {
//                 value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
//                 message: "Email is wrong. Add please point and domain",
//               },
//             })}
//             className={classes.email}
//             placeholder="     Email"/>
//         </label>
//         <p style={{ color: "red" }}>{errors.email?.message}</p>
//         <button type="submit" disabled={isSubmitting}>
//           Order
//         </button>
//         <p>{isSubmitSuccessful && "Thanks!"}</p>
//       </form>
//     </div>
//   );
// };

// export default BasketForm;
 
