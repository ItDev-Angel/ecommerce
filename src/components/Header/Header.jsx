import React, { useRef, useEffect } from 'react'
import {Container} from "reactstrap";
import logo from "../../assets/images/logo.png"
import {NavLink, Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import './header.css'

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink')
      }
      else {
      headerRef.current.classList.remove('header__shrink')
      }
      return () => window.removeEventListener('scroll')
  })
    
  },[])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper df">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>TASTY TREAT</h5>
          </div>
          {}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu df gap-5">
              {nav__links.map((item, index) => (
                <NavLink 
                to={item.path} 
                key={index}
                className={navClass => navClass.isActive ? 'active__menu' : ''}>
                  {item.display}
                </NavLink>
              ))}<i className="ri-close-fill close"></i>
            </div>
          </div>
          {}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
                <i className="ri-shopping-cart-line"></i>
              <span className="cart__badge justify-content-center">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to='/login'>
                <i className="ri-user-3-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header