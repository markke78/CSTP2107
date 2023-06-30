/* eslint-disable react/prop-types */

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


export default function CarouselShow({data}) {
  

  console.log(data)
  return (  
    <section id="home" className='hero-block'>
      <Carousel>
        <Carousel.Item>
          <img
            className=" w-100 d-block"
            src={data.news[0]?.image}         
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data.news[0]?.title} </h3>
            <p>{data.news[0]?.description} </p>
            <a className='btn btn-primary '>
              <Link className='text-decoration-none text-white' to={`/news/${data.news[0]?.id}`}>
                  Read More
              </Link>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={data.news[1]?.image}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{data.news[1]?.title} </h3>
            <p>{data.news[1]?.description} </p>
            <a className='btn btn-primary'>
              <Link className='text-decoration-none text-white' to={`/news/${data.news[1]?.id}`}>
                Read More
              </Link>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={data.news[2]?.image}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{data.news[2]?.title} </h3>
            <p>{data.news[2]?.description} </p>
            <a className='btn btn-primary'>
              <Link className='text-decoration-none text-white' to={`/news/${data.news[2]?.id}`}>
                Read More
              </Link>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </section>
      

  );
}

