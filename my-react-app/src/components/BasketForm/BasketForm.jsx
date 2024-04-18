import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './BasketForm.module.css';

  const BasketForm = ({ handleAddUser }) => {
    const {
      register,
      handleSubmit,
      formState: { errors, defaultValues, isSubmitSuccessful, isSubmitting, isValid },
      reset,
      getValues,
    } = useForm({
    })
  
    const handleUserSubmit = (data) => {
      handleAddUser(data)
      reset()
    }
    console.log(getValues()) 
  return (
   
      <div className={classes.basket_form}>
        <h3>Order details</h3>
        <p>... items</p>
        <div className={classes.totalSum}>
        <p>Total</p>
        <h2>Price</h2>
        </div>
        <form onSubmit={handleSubmit(handleUserSubmit)} className={classes.basketForm}>
      <label htmlFor="firstName">
        <input
          id="firstName"
          type="text"
          {...register('firstName', {
            required: true,
            minLength: { value: 4, message: 'The name must be longer than 3 letters' },
            maxLength: { value: 10, message: 'The name must be shorter than 10 letters' },
          })}
          className={classes.firstName} placeholder='     Name'
        />
      </label>
      <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
      <label htmlFor="phone">
        <input
          id="phone"
          type="tel"
          {...register('phoneNumber', {
            required: 'This field is important',
            pattern: {
              value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
              message: 'Enter please german number',
            },
          })}
          className={classes.phoneNumber} placeholder='     Phone number'
        />
      </label>
      <p style={{ color: 'red' }}>{errors.phone?.message}</p>
      <label htmlFor="email">
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'This field is important',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Email is wrong. Add please point and domain',
            },
          })}
          className={classes.email} placeholder='     Email'
        />
      </label>
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <button type="submit" disabled={isSubmitting}>
        Order
      </button>
      <p>{isSubmitSuccessful && 'Thanks!'}</p>
        </form>
      </div>
  );
}

export default BasketForm