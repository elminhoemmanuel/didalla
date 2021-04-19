import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) =>{
           console.log(data);     
        }
  
  return (
    <form className='p-20' onSubmit={handleSubmit(onSubmit)}>
      <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
       type='text' name='firstName' {...register("firstName", { required: true })} />
      {errors.firstName && "First name is required"}
      <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
       type='text' name='lastName' {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
       type='password' name='password' {...register("password",{ 
           required: true,
           minLength:{
               value:2,
               message:'must be 8 characters long'
           },
           validate : (value) =>{
               return [
                   /[a-z]/,
                   /[A-Z]/,
                   /[0-9]/,
                   /[^a-zA-z0-9]/
               ].every((patter) =>patter.test(value))
           }
            })} />
      {errors.password && "Password is required"}
      <input type="submit" />
    </form>
  );
}



// import React from "react";
// import { useForm } from "react-hook-form";

// const Sample = () =>{

//     const { register, handleSubmit, formState: { errors }} = useForm ();
//     const onSubmit = (data) =>{
//         console.log(data);
//     }

//     return (
//         <form className='p-64' action="" onSubmit={handleSubmit(onSubmit)}>
//             <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
//                                  type="text"
//                                  id='lastname'
//                                  name="lastname"
//                                  {...register("lastname", { required: "Last name cannot be empty", maxLength: 10 })}
//             />
//             {errors.lastname.message ? <div>{errors.lastname.message}</div> : null}
//             <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
//                                  type="password"
//                                  id='password'
//                                  name="password"
//                                  {...register("password" , { 
//                                     required: true, 
//                                     maxLength: 10, 
//                                     minLength:8 })}
                                 
//             />
//             {errors.lastname.message ? <div>{errors.lastname.message}</div> : null}
//             <button type='submit'>submit</button>
//         </form>
//     )
// }

// export default Sample
