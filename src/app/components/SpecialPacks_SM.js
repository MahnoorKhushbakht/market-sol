'use client'
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const content = [
    { point: 'Phone Support Service' },
    { point: 'Remote Connection Service' },
    { point: 'Onsite Support Service' },
    { point: 'Consultancy Service' },
    { point: 'Network Security Service' },
];

const contentData = [
    {
        title: 'IT Support',
        para: 'There are management services we provide the IT support and maintenance',
        cardImg: 'images/network_cable.jpg',
    },
    {
        title: 'Cloud Service',
        para: 'It is the process of configuring virtual cloud systems that businesses need',
        cardImg: 'images/network_cable.jpg',
    },
    {
        title: 'Server Visualization',
        para: 'It is the process of configuring virtual servers that businesses need',
        cardImg: 'images/network_nodes.jpg',
    },
];

function SpecialPacks_SM() {

    return (
        <div className='min-h-screen w-full'>
            <div className="grid grid-cols-1 place-items-center place-content-center mt-5">
                <h1 data-aos="fade-down" className="font-extrabold text-2xl md:text-3xl">Special Packs</h1>
                <p data-aos="fade-down" className="font-semibold text-lg md:text-2xl text-center">Select pricing plan to get more</p>
            </div>
            <div className='grid grid-cols-1 place-content-center gap-4 place-items-center mt-10 mb-10'>
                {contentData.map((contentItem, idx) => (
                        <div
                            key={idx}
                            className='w-80 h-full shadow-md rounded-lg overflow-hidden bg-white cursor-pointer'
                            style={{ minHeight: '30rem' }} 
                        >
                            <div className="relative p-4 flex flex-col w-full h-64 bg-cover bg-slate-600 align-middle justify-center text-center">
                                <Image src={contentItem.cardImg} alt="Service" className="absolute inset-0 object-cover w-full h-full opacity-60" />
                                <div className="relative z-10">
                                    <h1 className='font-bold text-white text-lg'>{contentItem.title}</h1>
                                    <p className='text-white p-3'>{contentItem.para}</p>
                                </div>
                            </div>
                            <ListGroup className="list-group-flush">
                                {content.map((items, index) => (
                                    <ListGroup.Item key={index}>
                                        {items.point}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div className='p-4 text-center'>
                                <a className='w-auto text-white hover:bg-slate-500 hover:text-white transition-colors hvr-grow rounded-md p-3 bg-slate-600 inline-block' href="#">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                ))}
     </div>
        </div>
    );
}

export default SpecialPacks_SM;
