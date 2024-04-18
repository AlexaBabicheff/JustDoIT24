import { useForm } from 'react-hook-form'
import classes from './Discount.module.css'
import discount from './img/image.svg'

const Form = ({ handleAddUser }) => {
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
    <main>
      <div>
      <h2>5% off on the first order</h2>   
      </div>
     <div className={classes.content_discount}>
      < img src={discount} alt="" />
     
    
    <form onSubmit={handleSubmit(handleUserSubmit)} className={classes.form}>
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
      <button className={classes.btn} type="submit" disabled={isSubmitting}>
        Get a discount
      </button>
      <p>{isSubmitSuccessful && 'Thank you!'}</p>
    </form>
    </div>
    </main>
  )
}

export default Form;