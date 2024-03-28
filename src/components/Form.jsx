import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

Form.propTypes = {
    type: PropTypes.string,
}

export default function Form({type=''}) {
  if (type === 'login')
 { return (
    <form className='bg-white rounded-md shadow border border-1 p-5 text-[10px] flex flex-col w-full max-w-[200px] lg:max-w-[300px] gap-2'>
      <h2 className='text-lg font-medium'>Sign In</h2>
      <div>
        <label className='uppercase text-azure-radiance-800'>Email</label>
        <input className='w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]'/>
        </div>
        <div>
        <label className='uppercase text-azure-radiance-800 '>Password</label>
        <input className='w-full border border-gray-600 p-1.5 rounded focus:border-azure-radiance-800 focus:outline-none focus:border-[1.5px]'/>
        </div>
      <Link className='ml-auto text-azure-radiance-800 font-bold' to ='/onboarding/reset' >Forgot Password ?</Link>
      <Button text='sign in' type='form'/>
      <p className='text-center'>{`Don't have an account yet? `}<Link className=' text-azure-radiance-800 font-bold' to ='/onboarding/register' >Create account</Link> </p>
    </form>
  )}
  if(type === 'register')
}
