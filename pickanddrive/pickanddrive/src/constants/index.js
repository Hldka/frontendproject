const airConditioningTypes = [
    {
        id: 0,
        name: "No",
        value: false
    },
    {
        id: 1,
        name: "Yes",
        value: true
    }
];

const errors = {
    notFound: {
        code: 404,
        title: "Oops! Page Not Found",
        desc: "The page you are looking for might have been removed had its name changed or is temporarily unavailable. Please try again later."
    },
    forbidden: {
        code: 403,
        title: "Oops! Forbidden Access!",
        desc: "You don't have permission to access this page. If you think otherwise, please contact the administrator."
    },
}

const fuelTypes = [
    {
        id: 1,
        name: "Diesel",
        value: "Diesel"
    },
    {
        id: 2,
        name: "Gasoline",
        value: "Gasoline"
    },
    {
        id: 3,
        name: "Hybrid",
        value: "Hybrid"
    },
    {
        id: 4,
        name: "Electricity",
        value: "Electricity"
    },
    {
        id: 5,
        name: "LPG",
        value: "LPG"
    },
    {
        id: 6,
        name: "CNG",
        value: "CNG"
    },
    {
        id: 7,
        name: "Hydrogen",
        value: "Hydrogen"
    },
];


const offers = [
    {
        title: "City Explorer",
        desc: "Immerse yourself in the rhythm of the city with our City Explorer offer. Our fleet of compact, fuel-efficient vehicles is perfect for navigating the bustling streets and tight parking spaces of the urban jungle. With intuitive tech features for a seamless drive and a range of stylish models to choose from, you'll transform your city commute into a joyride.",
        direction: ""
    },
    {
        title: "Nature Adventurer",
        desc: "Venture into the wild with our Nature Adventurer package. Our selection of rugged SUVs is built to handle diverse terrains, making them perfect for off-road escapades or camping trips. Equipped with advanced 4-wheel drive capabilities and spacious interiors, our vehicles ensure a smooth and comfortable journey, regardless of the destination.",
        direction: ""
    },
    {
        title: "Executive Comfort",
        desc: "Indulge in the epitome of luxury and comfort with our Executive Comfort offer. Our premium sedans provide a seamless blend of style, sophistication, and technology, ensuring an exceptional driving experience. With plush interiors, state-of-the-art tech features, and smooth performance, make every journey feel like a first-class ride.",
        direction: ""
    },
    {
        title: "Family Fun",
        desc: "Make unforgettable family memories with our Family Fun package. Our range of spacious vans and SUVs offer ample room for all your loved ones and luggage. With top-tier safety features and comfort-enhancing amenities, enjoy peace of mind while ensuring your family's journey is fun, comfortable, and safe.",
        direction: "right"
    },
    {
        title: "Eco-Friendly",
        desc: "Embrace sustainable living with our Eco-Friendly offer. Our range of electric and hybrid models offers the perfect balance between efficient performance and eco-friendly technology. Drive with confidence, knowing you're reducing your carbon footprint while enjoying all the conveniences of modern driving technology.",
        direction: "right"
    },
    {
        title: "Sporty Experience",
        desc: "Thrill-seekers will rejoice with our Sporty Experience package. Get behind the wheel of a high-performance sports car, finely tuned for optimum speed and control. With cutting-edge technology and sleek designs, these vehicles are built to deliver a driving experience like no other. Feel the exhilaration of the open road like never before.",
        direction: "right"
    }
];

const reservationStatus = [
    {
        id: 1,
        name: "CREATED",
        value: "CREATED"
    },
    {
        id: 2,
        name: "CANCELLED",
        value: "CANCELLED"
    },
    {
        id: 3,
        name: "DONE",
        value: "DONE"
    }
];

const roles = [
    {
        id: 1,
        name: "Customer",
        value: "Customer",
    },
    {
        id: 2,
        name: "Administrator",
        value: "Administrator",
    }
];

const routes = {
    // ADMIN ROUTES
    adminContactMessages: "/admin/contact-messages",
    adminDashboard: "/admin",
    adminReservations: "/admin/reservations",
    adminUsers: "/admin/users",
    adminVehicles: "/admin/vehicles",

    // COMMON ROUTES
    about: "/about",
    contact: "/contact",
    forbidden: "/forbidden",
    home: "/",
    login: "/auth/login",
    privacyPolicy: "/privacy-policy",
    register: "/auth/register",
    userProfile: "/user",
    userReservations: "/user/reservations",
    vehicles: "/vehicles",
};

const slider = [
    {
        id: 1,
        image: "slider1.jpg",
        title: "City Escape: Embrace the Green Oasis",
        subtitle: "Embark on an urban adventure with our luxurious SUVs. Navigate charming cobblestone streets, surrounded by lush greenery, as you escape the city's chaos. Discover hidden gems and embrace the tranquil oasis within the metropolis.",
    },
    {
        id: 2,
        image: "slider2.jpg",
        title: "Unleash the Power of Performance",
        subtitle: "Experience the exhilaration of our high-performance cars as you conquer winding roads, surrounded by the picturesque beauty of nature. With precision engineering and advanced safety features, our vehicles deliver a driving experience that combines excitement and professionalism."
    }
];


const website = {
    name: 'Pick & Drive',
    slogan: "Your Reliable Ride, As Long As You Need",
    title: "Pick & Drive - Your Reliable Ride, As Long As You Need",
    desc: "Pick&Drive.com is a trusted platform offering an extensive fleet of quality rental cars for your every need. Our commitment is to provide a seamless car rental experience, where you can pick your preferred vehicle and drive at your convenience. We prioritize customer safety, comfort, and satisfaction. Whether you need a compact car for city driving, a spacious SUV for family adventures, or a luxury model for special occasions, Pick&Drive has got you covered. Our reliable service, available across multiple cities, ensures you have a dependable ride for as long as you need, wherever your journey takes you.",
    about: {
        title: "About Us",
        desc: ["Established in 2014 in the heart of San Francisco, Pick&Drive emerged from the vision of two experienced travellers, Johnathan Price and Melanie Ross. Having navigated the complexities and frustrations of traditional car rentals during their numerous journeys, they felt compelled to revolutionize the experience for fellow travellers. Johnathan, with his background in technology and a keen interest in the automotive industry, was perfectly suited to tackle the logistical challenges. He dreamt of creating a platform where renting a car would be as easy as ordering a meal online. Melanie, with her rich experience in customer service and operations, shared his vision and was determined to ensure that their service would be customer-centric and hassle-free.", "Their shared passion for enhancing the travel experience led to the birth of Pick&Drive, a platform that combines cutting-edge technology with an unwavering commitment to customer service, providing a seamless car rental experience that is second to none. In our early days, we started with a modest fleet of cars, operating solely in San Francisco. But our dedication to quality and convenience quickly won over our customers. As our reputation grew, so did we. By 2017, we had expanded our operations to cover all of California. Today, we are proud to provide our trusted service in cities all across the United States. Despite our growth, we've never lost sight of our core values - reliability, flexibility, and exceptional service. Every decision we make, every policy we implement, is guided by these principles. We're not just about renting cars; we're about making your journey smoother, safer, and more enjoyable. As we look to the future, we remain committed to innovation and improvement. We continuously update our fleet to include the latest models and ensure our platform stays user-friendly and efficient. We're also excited about expanding our footprint even further, with plans to serve more cities and offer more services to our valued customers", "At Pick&Drive, our mission is to deliver a reliable ride, for as long as you need, wherever your journey takes you. Join us on this exciting ride"],
    },
    contact: {
        title: "Contact Us",
        desc: "At Pick&Drive, we're always ready to assist you. Our customer service team is available 24/7 to help with your queries, bookings, and feedback. Please don't hesitate to reach out to us via any of the following channels. We look forward to serving you and making your car rental experience the best it can be"
    },
    footer: "© 2023 Pick&Drive. All rights reserved",
    address: "Pick&Drive Headquarters, 150 Main Street, San Francisco, CA 94105, United States",
    phone: "+14155550123",
    phone2: "+14155550124",
    mapUrl: "https://goo.gl/maps/qTTsxo39YWMdGXd88",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9631309952415!2d-122.3940873!3d37.790903799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f28f34d9%3A0xd368cc2220a9c46e!2s150%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2str!4v1687887041591!5m2!1sen!2str",
    email: "info@pickanddrive.com",
    instagram: "https://www.instagram.com/pickanddrive/",
    facebook: "https://www.facebook.com/pickanddrive/",
    twitter: "https://twitter.com/pickanddrive/",
    linkedin: "https://www.linkedin.com/company/pickanddrive/",
    youtube: "https://www.youtube.com/channel/pickanddrive/"
};


const teamMembers = [
    {
        id: 1,
        image: "person1.jpg",
        name: "Jonathan Price",
        title: "Co-Founder and Chief Executive Officer",
        desc: "Jonathan Price is the driving force behind Pick & Drive. With a background in automotive engineering and business, He co-founded the company in 2014, aiming to revolutionize the car rental industry. Overseeing strategic operations, he ensures that the company stays true to its mission of providing customers with top-quality vehicles that cater to their individual needs."
    },
    {
        id: 2,
        image: "person2.jpg",
        name: "Emily Wright",
        title: "Chief Operations Officer",
        desc: "Emily Wright has been instrumental in shaping Pick & Drive's business strategy. She joined the team in 2015 and has since worked tirelessly to streamline the company's operations, making the car rental process as smooth as possible for customers. Her expertise in operational management ensures that each rental location maintains the high standards set by Pick & Drive."
    },
    {
        id: 3,
        image: "person3.jpg",
        name: "David Thompson",
        title: "Chief Technology Officer",
        desc: "As the Chief Technology Officer at Pick & Drive, David Thompson has been crucial in integrating innovative technology into the company's services. He joined the team in 2017 and brought with him extensive experience in developing customer-centric technology solutions. His innovative vision led to the development of the Pick & Drive online reservation system, making it easier than ever for customers to browse, reserve, and rent vehicles. "
    }
];


const transmissionTypes = [
    {
        id: 1,
        name: "Automatic",
        value: "Automatic"
    },
    {
        id: 2,
        name: "Manual",
        value: "Manual"
    },
    {
        id: 3,
        name: "Tiptronic",
        value: "Tiptronic"
    }
];

const whatWeDo = {
    title: "What We Do",
    desc: "At Pick & Drive, we go beyond car rentals. We offer comprehensive transportation solutions tailored to the diverse needs of our customers. Our fleet comprises a wide array of vehicles, from compact, eco-friendly cars perfect for city driving, to spacious, rugged SUVs ideal for off-road adventures and family vacations. With our customer-centric approach, we have reimagined the car rental experience, providing not just a car, but a promise of quality, reliability, and convenience. We pride ourselves on our state-of-the-art booking system, round-the-clock customer service, and commitment to sustainability. Each vehicle in our fleet is meticulously maintained to ensure a safe, comfortable, and enjoyable driving experience. At Pick & Drive, we're not just providing a service - we're helping to create memorable journeys.",
    services: [
        {
            id: 1,
            title: "Individual Vehicle Rental",
        },
        {
            id: 2,
            title: "Corporate Fleet Solutions",
        },
        {
            id: 3,
            title: "Extended Lease Programs"
        },
        {
            id: 4,
            title: "Premium Automobile Hire"
        },
        {
            id: 5,
            title: "Sustainable Mobility Solutions"
        },
        {
            id: 6,
            title: "Off-Road Vehicle Leasing"
        }
    ]
};

export const constants = {
    airConditioningTypes,
    fuelTypes,
    errors,
    offers,
    reservationStatus,
    roles,
    routes,
    slider,
    teamMembers,
    transmissionTypes,
    website,
    whatWeDo
}