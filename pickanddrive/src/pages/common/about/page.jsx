import {
    BestOffers,
    PageHeader,
    Spacer,
    Team,
    WhatWeDo,
    WhoWeAre,
} from "../../../components";

const AboutPage = () => {
    return (
        <>
            <PageHeader title="About Us" />
            <Spacer />
            <WhoWeAre />
            <Spacer />
            <BestOffers />
            <Spacer />
            <Team />
            <Spacer />
            <WhatWeDo />
        </>
    );
};

export default AboutPage;
