/* eslint-disable react/prop-types */

export const Label = ({type, className}) => {
  return (
    <div>
        <label className={`block mb-2 ${className}`}>{type} </label>

    </div>
  )
}
