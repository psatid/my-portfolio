import ProjectImg01 from './img/test02.png';
import ProjectImg02 from './img/test.png';
import eCommerceImg from './img/eCommerce-project.png';
import SocialMeidaImg from './img/social-media-project.png';

export const projectData = [
    {
        id: 1,
        name: 'E-Commerce Store',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet reiciendis possimus rerum omnis recusandae molestias error consequuntur, doloribus inventore reprehenderit officiis. Dolore aut, repellendus eius fugiat numquam cumque.',
        img: eCommerceImg,
        toolUsed: ['react', 'context API', 'bootstrap'],
        url: 'https://psatid-react-ecommerce.netlify.app/',
        github: 'https://github.com/psatid/e-commerce-web'
    },
    {
        id: 2,
        name: 'Social-Media',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet reiciendis possimus rerum omnis recusandae molestias error consequuntur, doloribus inventore reprehenderit officiis. Dolore aut, repellendus eius fugiat numquam cumque.',
        img: SocialMeidaImg,
        toolUsed: ['react', 'redux', 'nodejs', 'material-UI'],
        url: 'https://psatid-social-media-app.netlify.app/',
        github: 'https://github.com/psatid/social-media-react'
    },
    {
        id: 3,
        name: 'Traffic Identification System',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet reiciendis possimus rerum omnis recusandae molestias error consequuntur, doloribus inventore reprehenderit officiis. Dolore aut, repellendus eius fugiat numquam cumque.',
        img: ProjectImg02,
        toolUsed: ['python', 'openCV'],
        url: 'https://github.com/psatid/vehicle-detection',
        github: 'https://github.com/psatid/vehicle-detection'
    }
];
