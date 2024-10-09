/* eslint-disable react/prop-types */

export const Input = ({type,placeholder}) => {
  return (
    <div><input 
    type={type}
    placeholder={placeholder}
    className="border rounded w-full py-2 px-3" />
    </div>
  )
}
