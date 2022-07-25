import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import deliveryImg from "../assets/images/delivery.png"
import '../components/Helmet/hemlet.css'
import { Link } from "react-router-dom"
import Category from "../components/UI/category/Category"
import './home.css'

import featureImg01 from "../assets/images/service-01.png"
import featureImg02 from "../assets/images/service-02.png"
import featureImg03 from "../assets/images/service-03.png"

import products from "../assets/fake-data/products.js"
import networkImg from "../assets/images/network.png"

import foodCategoryImg01 from "../assets/images/hamburger.png"
import foodCategoryImg02 from "../assets/images/pizza.png"
import foodCategoryImg03 from "../assets/images/bread.png"
import whyImg from "../assets/images/location.png"
import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

const featureData = [ 
  { 
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)
  const [hotPizza, setHotPizza] = useState([])

  useEffect(()=> {
    const filterPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = filterPizza.slice(0.4)
    setHotPizza(slicePizza)
  },[])

  useEffect(()=> {
    if(category === 'ALL') {
      setAllProducts(products)
    }
    if(category === 'BURGER') {
      const filterProducts = products.filter(item => item.category === 'Burger')
      setAllProducts(filterProducts)
    }
    if(category === 'PIZZA') {
      const filterProducts = products.filter(item => item.category === 'Pizza')
      setAllProducts(filterProducts)
    }
    if(category === 'BREAD') {
      const filterProducts = products.filter(item => item.category === 'Bread')
      setAllProducts(filterProducts)
    }
  },[category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="delivery__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <div className="mb-4 delivery__title"><span>HUNGRY?</span> 
                <h3>Don't worry - don't wait.</h3> 
                <span> Order and forget about hunger.</span>
                <h3>Enjoy and be happy every day</h3></div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <div className="delivery__btn d-flex align-items-center gap-4 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">Order now 
                <i className="ri-send-plane-line"></i></button>
              <button className="all__foods-btn"><Link to="/foods">See all foods</Link></button>
              </div>
              <div className="delivery__service d-flex align-items-center mt-3 gap-3">
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-car-line"></i>
                  </span> {" "}
                  not shipping charge
                </p>
                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                  </span> {" "}
                  100% secure checkout
                </p>
              </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="delivery__img">
                <img src={deliveryImg} alt="Creative Commons 4.0 BY-NCy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
          <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                We will <span> take care</span>
              </h2>
              <p className="feature__text mb-1 mt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <p className="feature__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </Col>
            {
              featureData.map((item, index) => (
                <Col lg="4" md="6" sm="6" xs="12" key={index} className="mt-2">
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature img" className="w-25 mb-3"/>
                    <h5 className="fw-bold mb-4">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
                <div className="food__category d-flex flex-wrap align-items-center gap-4 justify-content-center">
                  <button 
                  className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('ALL')}
                  >All</button>
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('BURGER')}
                  >
                  <img src={foodCategoryImg01} alt="burger" />Burger
                  </button>
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('PIZZA')}
                  >
                  <img src={foodCategoryImg02} alt="pizza" />Pizza
                  </button>
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('BREAD')}
                  >
                  <img src={foodCategoryImg03} alt="bread" />Bread
                  </button>
                </div>
            </Col>
            {
              allProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))
            }
            
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why teasty treat" className="w-100"/>
            </Col>
            <Col lg="6" md="6">
              <div className="whywe">
                <h2 className="whywe__title mb-4">Why <span>teasty treat?</span></h2>
                <p className="whywe__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ListGroup className="mt-4">
                  <ListGroupItem>
                  <p className="choose__us-title  d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                  Fresh and teasty Foods</p>
                  <p className="whywe__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </ListGroupItem>
                  <ListGroupItem>
                  <p className="choose__us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                  Quantity support Foods</p>
                  <p className="whywe__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </ListGroupItem>
                  <ListGroupItem>
                  <p className="choose__us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                  Order from any location Foods</p>
                  <p className="whywe__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map((item)=>(
                <Col lg="3" md="4" key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="testimonial">
            <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
            <h2 className="testimonial__title mb-4">What our <span>customers</span> are saying</h2>
            <p className="testimonial__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <TestimonialSlider/>
            </div> 
            </Col>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100"/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home