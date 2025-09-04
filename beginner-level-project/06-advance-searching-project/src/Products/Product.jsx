import React from 'react'
import './Product.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from "react-icons/bs";
const Product = () => {
  return (
    <>
      <section className='card-container'>
        <section className='card'>
          <img className='card-image' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe image" />

          <div className='card-details'>
            
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <span className='total-review'>4</span>
            </section>
            

            <section className='card-price'>
              <div className='price'>
                <del>$300</del>200
              </div>

              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>

        <section className='card'>
          <img className='card-image' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe image" />

          <div className='card-details'>
            
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <span className='total-review'>4</span>
            </section>
            

            <section className='card-price'>
              <div className='price'>
                <del>$300</del>200
              </div>

              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>

        <section className='card'>
          <img className='card-image' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe image" />

          <div className='card-details'>
            
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <span className='total-review'>4</span>
            </section>
            

            <section className='card-price'>
              <div className='price'>
                <del>$300</del>200
              </div>

              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>

        <section className='card'>
          <img className='card-image' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe image" />

          <div className='card-details'>
            
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <span className='total-review'>4</span>
            </section>
            

            <section className='card-price'>
              <div className='price'>
                <del>$300</del>200
              </div>

              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>

        <section className='card'>
          <img className='card-image' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe image" />

          <div className='card-details'>
            
            <h3 className='card-title'>Shoe</h3>
            <section className='card-review'>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <AiFillStar className='star-icon'/>
              <span className='total-review'>4</span>
            </section>
            

            <section className='card-price'>
              <div className='price'>
                <del>$300</del>200
              </div>

              <div className='bag'>
                <BsFillBagHeartFill className='bag-icon' />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Product