import React, { useState } from 'react'

export default function MyAlert({type , message}) {
  return (
    <div className='myAlertContainer'>
    <div className={`myAlert ${type == 'success' ? "successAlert" : type == "info" ? "infoAlert" : ''}`}>
      {
        type == "success" ? 
        <i className="far fa-thumbs-up text-success myAlertIcon"  />
        : <i className="bx bxs-error text-danger myAlertIcon"  />
      }
      <p className='myAlertMessage'>
        {message}
      </p>
      </div>
    </div>
  )
}
