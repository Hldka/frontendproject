import { Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { utils } from "../../../../../utils";

const tableHeaders = ["#", "Vehicle", "Pick Up", "Drop Off"];

const UserReservationsTable = (props) => {
    const navigate = useNavigate();

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {tableHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.loading && (
                    <tr>
                        <td colSpan={4} className="text-center">
                            <Spinner animation="border" size="sm" />
                        </td>
                    </tr>
                )}
                {props.reservations.map((reservation, index) => (
                    <tr
                        key={reservation?.id || index}
                        onClick={() => navigate(`${reservation?.id}`)}
                        style={{ cursor: "pointer" }}>
                        {/* rezervasyon obje elemanlarini kullanarak olusturulan array icerisinde loop yapilarak table'a yerlestirilir*/}
                        {[
                            index + 1,
                            reservation?.car?.model,
                            `${
                                reservation?.pickUpLocation
                            } — ${utils.functions.formatDateTime(
                                reservation?.pickUpDate
                            )}`,
                            `${
                                reservation?.dropOffLocation
                            } — ${utils.functions.formatDateTime(
                                reservation?.dropOffDate
                            )}`,
                        ].map((item, index) => (
                            <td key={index}>{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default UserReservationsTable;
