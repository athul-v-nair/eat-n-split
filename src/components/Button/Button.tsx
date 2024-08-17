import { ButtonPropType } from './types'

const Button = ({children, onClick}: ButtonPropType) => {
  return (
    <>
      <button className='button' onClick={onClick}>{children}</button>
    </>
  )
}

export default Button
