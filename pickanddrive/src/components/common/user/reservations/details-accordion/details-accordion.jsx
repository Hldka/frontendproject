import { Accordion, Table } from "react-bootstrap";
import { utils } from "../../../../../utils";
import "./details-accordion.scss";

const UserReservationDetailsAccordion = (props) => {
    const {
        pickUpLocation,
        dropOffLocation,
        pickUpTime,
        dropOffTime,
        status,
        totalPrice,
        car,
    } = props;

    const accordionItems = [
        {
            id: 1,
            title: "Reservation Details",
            content: [
                {
                    label: "Pick Up Location",
                    value: pickUpLocation,
                },
                {
                    label: "Drop Off Location",
                    value: dropOffLocation,
                },
                {
                    label: "Pick Up Time",
                    value: utils.functions.formatDateTime(pickUpTime),
                },
                {
                    label: "Drop Off Time",
                    value: utils.functions.formatDateTime(dropOffTime),
                },
                {
                    label: "Status",
                    value: status,
                },
                {
                    label: "Price",
                    value: `$${totalPrice}`,
                },
            ],
        },
        {
            id: 2,
            title: "Car Details",
            content: [
                {
                    label: "Model",
                    value: car.model,
                },
                {
                    label: "Doors",
                    value: car.doors,
                },
                {
                    label: "Seats",
                    value: car.seats,
                },
                {
                    label: "Luggage",
                    value: car.luggage,
                },
                {
                    label: "Transmission",
                    value: car.transmission,
                },
                {
                    label: "Air Conditioning",
                    value: car.airConditioning ? "Yes" : "No",
                },
                {
                    label: "Fuel Type",
                    value: car.fuelType,
                },
                {
                    label: "Age",
                    value: car.age,
                },
            ],
        },
    ];

    return (
        <Accordion defaultActiveKey={1} className="details-accordion">
            {accordionItems.map((accordionItem) => (
                <Accordion.Item
                    eventKey={accordionItem.id}
                    key={accordionItem.id}>
                    <Accordion.Header>{accordionItem.title}</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <tbody>
                                {accordionItem.content.map((contentItem) => (
                                    <tr key={contentItem.label}>
                                        <td>{contentItem.label}</td>
                                        <td>{contentItem.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default UserReservationDetailsAccordion;
