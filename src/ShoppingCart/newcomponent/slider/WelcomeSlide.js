import Carousel from 'react-bootstrap/Carousel';
function Slider({ product }) {
  return (
    <>
         <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"
          alt="First slide" height="350px"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1643102114056/blinkit-coupons.jpg"
          alt="Second slide"
          height="350px"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://cdn.zoutons.com/images/originals/blog/blinkitbanner_1650263387.png"
          alt="Third slide"
          height="350px"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 rounded"
          src="https://www.shutterstock.com/image-photo/stack-beige-checkered-wool-blankets-600w-1157590618.jpg"
          alt="Third slide"
          height="350px"
        />
      </Carousel.Item>
    </Carousel>
    </>);
}

export default Slider;