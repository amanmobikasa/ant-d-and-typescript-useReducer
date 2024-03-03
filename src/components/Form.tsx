import React, { useCallback, useReducer, useState } from 'react'
import InputComp from '../common/Input'
import ButtonComp from '../common/Button'
import { userLoginReducer, initialState } from './Reducer'


const FormComponent =()=> {
  const [userLogin, setUserLogin] = useState({} as any)
  const [state, dispatch] = useReducer(userLoginReducer, initialState)
  
  const { loading, error, success, message} = state

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
    const {id, value} = e.target
    setUserLogin({...userLogin, [id]: value})
  },[userLogin])

  
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type : "LOGIN_START", payload : userLogin})
  },[userLogin, loading, error, success, message])


  return <>
        <form onSubmit={handleSubmit}  className='w-8/12 mx-auto border-[0.01rem] rounded-md shadow-sm'>
            <div className='p-4 py-4 '>
             {success ? <p className='text-green-500'>{message}</p> : null}
                <label>
                    <p className='!text-[1rem] font-[500] '>User Name :</p>
                    <InputComp type='text' className='' id='user_name' name='' onChange={handleChange} required={true} value={userLogin?.user_name} placeholder='Enter User Name'></InputComp>
                </label>
                <br />
                <label htmlFor="">
                    <p className='!text-[1rem] font-[500] '>User Password :</p>
                    <InputComp className='' id='user_password' name='' onChange={handleChange} required={true} value={userLogin?.user_password} placeholder='Enter User Name'></InputComp>
                </label>
                <br />
                <ButtonComp className='' typeBtn='submit' shape='round' color='default' >
                  <span className='font-bold'>{loading ? "Loading..." : "Submit"}</span>
                </ButtonComp>
                {/* <button type='submit'>Submit</button> */}
            </div>
        </form>
  </>
}

export default FormComponent