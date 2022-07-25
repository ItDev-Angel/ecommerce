import React from 'react'
import { ListGroupItem } from 'reactstrap'

import './cart-item.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const CartItem = ({item}) => {
  const {id, title, price, image01, quantity, totalPrice} = item;
  const dispatch = useDispatch()
  const incrimentItem = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img"/>
        <div className="cart__product-info d-flex align-items-center justify-content-between gap-4 w-100">
          <div>
            <h6 className="cart__item-title">{title}</h6>
            <p className="cart__product-price d-flex align-items-center gap-5">{quantity}x 
            <span>${totalPrice}</span></p>
            <div className="increase__decrease-btn d-flex align-items-center gap-3 justify-content-between">
              <span className="increase__btn" onClick={incrimentItem}>
              <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
              <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}><i className="ri-close-line"></i></span>
        </div>
      </div> 
    </ListGroupItem>
  )
}

export default CartItem