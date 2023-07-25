import { Col, Container, Row } from "react-bootstrap";
import {
    PageHeader,
    Spacer,
    UserAvatar,
    UserPasswordForm,
    UserProfileForm,
} from "../../../../components";

const UserProfilePage = () => {
    return (
        <>
            <PageHeader title="Profile" />
            <Spacer />
            <Container>
                <Row className="justify-content-center gap-5">
                    <Col lg={2} className="text-center">
                        <UserAvatar />
                    </Col>
                    <Col lg={4}>
                        <UserProfileForm />
                    </Col>
                    <Col lg={4}>
                        <UserPasswordForm />
                    </Col>
                </Row>
            </Container>
            <Spacer />
        </>
    );
};

export default UserProfilePage;
