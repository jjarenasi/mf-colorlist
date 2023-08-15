import React from 'react'
import Swal from 'sweetalert2'

const ColorList = ({colorList}) => {
  
  const handlerCopyColor=(color)=>{
    navigator.clipboard.writeText(color);
    Swal.fire({
      position:"top-end",
      icon: "success",
      title: `Color: ${color} copied!`,
      showConfirmButton: false,
      timer:3000,
      timerProgressBar: true,
    })
  }

  return (
    <div className='list-group text-center'>
      { colorList.length > 0 ? (colorList.map((color, index) => 
      <button 
      key={index} 
      type="button" 
      className='list-group-item list-group-item-action text-primary'
      aria-current="true"
      title='copiar'
      style={{
        background: color,
        fontWeight:"bolder",
      }}
      onClick={()=>handlerCopyColor(color)}
      >{color}</button>)
      ): (
      <div className='alert alert-danger' role='alert'><b>No Disponible</b></div>
      )
      }
    </div>
  )
}

export default ColorList
