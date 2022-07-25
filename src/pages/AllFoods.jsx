import React , { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate';
import './allfoods.css'
import './paginations.css'

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [pageNumber, setPageNumber] = useState(0)
  const searchedProduct = products.filter = ((item) => {
  if (searchTerm.value === '') return item;
  if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
})
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods"/>
      <section>
        <Container className="mt-4">
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between w-50">
                <input 
                className="" 
                type="text" 
                placeholder="I am looking for..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">A-Z</option>
                  <option value="descenting">Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {
              displayPage
              .map((item) => (
              <Col lg="3" md="4" sm="6" xs="12" key={item.id} 
              className="my-4">
                <ProductCard item={item} />
              </Col>
              )) 
            }
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previosLabel = {'Prev'}
                nextLabel = {'Next'}
                containerClassName='paginationBtn'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods