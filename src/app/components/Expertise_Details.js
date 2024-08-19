import Image from 'react-bootstrap/Image';

function Customer_Centric_Approach() {
    return (
        <div className="bg-slate-900 grid grid-cols-2 gap-2">
            <div className="m-2 flex items-center">
                <Image
                    src="/images/customer_service.jpg"
                    alt="customer service"
                    className="w-full h-auto rounded-md"
                />
            </div>
            <div className="text-white flex m-2">
                <p>
                    At Beryl Technologies Ltd, our customers are at the heart of everything we do. We believe in delivering tailored solutions that address their unique needs and challenges. By deeply understanding our customers requirements, we develop innovative products and services that exceed expectations. Our commitment to exceptional customer experiences drives our success and fosters long-term partnerships built on trust, reliability, and mutual growth.
                </p>
            </div>
        </div>
    );
}

function Innovation() {
    return (
        <div className="bg-slate-900 grid grid-cols-2 gap-2">
            <div className="m-2 flex items-center">
                <Image
                    src="/images/innovation.jpg"
                    alt="innovation"
                    className="w-full h-auto rounded-md"
                />
            </div>
            <div className="text-white m-2 flex flex-col">
                <p>

                Innovation is at the core of everything we do at Beryl Technologies Ltd. Our dedicated team of experts relentlessly pursues breakthrough ideas and solutions to address complex challenges. By fostering a culture of creativity and continuous learning, we encourage our employees to think outside the box and push boundaries. This commitment to innovation sets us apart and drives our success in empowering the future.
</p>
<p>With 5 years of experience, we help businesses with customize solutions,
                </p>
            </div>
        </div>
    );
}

 function Strategic_Partnership() {
    return (
        <div className="bg-slate-900 grid grid-cols-2 gap-2">
            <div className="m-2 flex items-center">
                <Image
                    src="/images/Partnership.jpg"
                    alt="Partnership"
                    className="w-full h-auto rounded-md"
                />
            </div>
            <div className="text-white flex m-2">
                <p>

                Collaboration is key to our success. We forge strategic partnerships with industry leaders, research institutions, and startups to leverage collective expertise and resources. Through these collaborations, we share knowledge and accelerate the development of cutting- edge solutions. By working together, we create a collaborative ecosystem that fosters growth, drives industry standards, and propels us towards a future of endless possibilities.
                </p>
            </div>
        </div>
    );
}

function Sustainable_Innovation() {
    return (
        <div className="bg-slate-900 grid grid-cols-2 gap-2">
            <div className="m-2 flex items-center">
                <Image
                    src="/images/tech_innovation.jpg"
                    alt="tech_innovation"
                    className="w-full h-auto rounded-md"
                />
            </div>
            <div className="text-white flex m-2">
                <p>
              
We recognize the importance of sustainable innovation in creating a better future. At Beryl Technologies Ltd, we integrate sustainable practices into our research, development, and operations. By prioritizing eco- friendly solutions, we contribute to a greener and more sustainable world. Through our commitment to sustainable innovation, we aim to inspire others and drive positive change, ensuring a better future for generations to come.
                </p>
            </div>
        </div>
    );
}


export {Customer_Centric_Approach, Sustainable_Innovation,Strategic_Partnership,Innovation}