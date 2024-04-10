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
    // defaultValues: {
    //   firstName: '',
    //   phoneNumber: 'Phone number',
    //   email: 'Email'
    // },
  })

  const handleUserSubmit = (data) => {
    handleAddUser(data)
    reset()
  }
  console.log(getValues()) 
  return (
    <main>
      
     <h2>5% off on the first order</h2>
      <div className={classes.content}>
      < img src={discount} alt="" />
      </div>
    
    <form onSubmit={handleSubmit(handleUserSubmit)} className={classes.form}>
      <label htmlFor="firstName">
        <input
          id="firstName"
          type="text"
          {...register('firstName', {
            required: true,
            minLength: { value: 4, message: 'Имя должно быть длинее 3 символов' },
            maxLength: { value: 10, message: 'Имя должно быть короче 10 символов' },
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
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            pattern: {
              value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
              message: 'Введите пожалуйста немецкий номер',
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
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Неправильно введен имейл, добавьте точку и домен',
            },
          })}
          className={classes.email} placeholder='     Email'
        />
      </label>
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <button className={classes.btn} type="submit" disabled={isSubmitting}>
        Get a discount
      </button>
      <p>{isSubmitSuccessful && 'СПАСИБО!'}</p>
    </form>
    {/* </div> */}
    </main>
  )
}

export default Form;