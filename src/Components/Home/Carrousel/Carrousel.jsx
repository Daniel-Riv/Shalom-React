import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const imgCarr = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1665761125784-e432f7f8539e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'First slide label',
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1665761125784-e432f7f8539e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        title: 'Second slide label',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1665761125784-e432f7f8539e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Third slide label',
    },
];
export const Carrousel = () => {
    
   
    return (
        <Carousel className="container-slider" >
            {
                imgCarr?.map((category) => (
                    <Carousel.Item interval={10000} key={category.id}>
                        <img
                            className="d-block w-100 slider-img imgC"
                            src={category.img}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};