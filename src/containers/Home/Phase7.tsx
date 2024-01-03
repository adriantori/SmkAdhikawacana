import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography } from '@mui/material';

const images = [
    'https://placehold.co/200x100/EEE/31343C',
    'https://placehold.co/200x100/DDD/31343C',
    'https://placehold.co/200x100/AAA/31343C',
    'https://placehold.co/200x100/AAA/31343C',
    'https://placehold.co/200x100/FFF/31343C',
    'https://placehold.co/200x100/AAA/31343C',
    'https://placehold.co/200x100/AAA/31343C',
    'https://placehold.co/200x100/AAA/31343C',
    'https://placehold.co/200x100/EEE/31343C',

    // Add more image URLs as needed
];

const Phase7 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        variableWidth: true, // Allow variable width based on the content
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:2
                },
            },
        ],
    };

    return (
        <Container>
            <Typography variant='h3' sx={{textAlign: 'center', mb:2}}>
                KERJASAMA KAMI
            </Typography>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={{ padding: '0 5px' }}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default Phase7;
