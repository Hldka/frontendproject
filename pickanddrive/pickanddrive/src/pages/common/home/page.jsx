import { BestOffers, PopularVehicles, Slider, Spacer, Team, WhatWeDo } from "../../../components";

const HomePage = () => {
    return (
        <>
            <Slider />
            <Spacer />
            <PopularVehicles />
            <Spacer />
            <BestOffers />
            <Spacer />
            <Team />
            <Spacer />
            <WhatWeDo />
        </>
    );
};

export default HomePage;
