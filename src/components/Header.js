import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }

  return (
    <>
    <header className= "m-3">  
    <i class="fas fa-dragon fa-2x"></i>
     <h1>Datatable</h1>
  
   
      </header>

    </>
  )
}

export default Header