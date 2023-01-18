import React, { useContext } from 'react'
import { Appcontext } from '../../context/Appcontext'
import styles from '../Navbar/Navbar.module.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from '../Navbar/images/logo.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const Navigate=useNavigate()
  const{cartData}=useContext(Appcontext)
  return (
    <div className={styles.navbar}>
      <div style={{cursor:"pointer"}} onClick={()=>Navigate("/")} className={styles.image}><img src={logo} alt='err'/></div>
      <div></div>
      <div style={{display:"flex"}}>
      <HiOutlineShoppingBag onClick={()=>Navigate("/cart")} cursor={'pointer'}   size={'1.5rem'} />     <span
        className={styles.counter}>{cartData?.length}</span></div>
    </div>
  )
}

export default Navbar
