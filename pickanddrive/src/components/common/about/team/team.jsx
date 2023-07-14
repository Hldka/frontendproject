import { Col, Container, Row } from "react-bootstrap";
import { SectionHeader, Spacer, TeamMember } from "../../../";
import { constants } from "../../../../constants";

const { teamMembers } = constants;

const Team = () => {
    return (
        <div className="team">
            <SectionHeader title1="Our" title2="Team" />
            <Spacer />
            <Container>
                <Row className="gy-5">
                    {teamMembers.map((member, index) => (
                        <Col lg={4} key={index}>
                            <TeamMember {...member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Team;
