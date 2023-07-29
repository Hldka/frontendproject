import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../../services";
import { constants } from "../../../constants";
import { utils } from "../../../utils";
import DataTable from "react-data-table-component";
import { Button, Spinner } from "react-bootstrap";
import { Loading } from "../../../components";
import "./style.scss";

const { routes } = constants;

const AdminReservationsPage = () => {
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);
    const [reservations, setReservations] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const navigate = useNavigate();

    const loadData = async (page) => {
        try {
            const data = await services.reservation.getReservationsByPage(
                page,
                perPage
            );
            setReservations(data.content);
            setTotalRows(data.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async () => {
        setDownloading(true);
        try {
            const download =
                await services.reservation.downloadReservationReports();

            // response'dan gelen blob'u kullanarak bir tane URL olustur ve onu indir

            /*
            <body>
                <a href={url} download="reservations.xlsx" />;
            </body>;
            */

            const url = window.URL.createObjectURL(download);
            const link = document.createElement("a");
            link.href = url;
            link.download = "reservations.xlsx";
            document.body.appendChild(link);
            link.click();
            link.remove();

            utils.functions.swalToast(
                "Your download will start soon",
                "success"
            );
        } catch (error) {
            utils.functions.swalToast(
                "There was an error while downloading",
                "error"
            );
        } finally {
            setDownloading(false);
        }
    };

    const handlePerPageRowsChange = async (newPerPage, page) => {
        // data table componentinin indexi 1'den basladigi icin parametreden gelen page sayisindan 1 azaltiyoruz.
        try {
            const data = await services.reservation.getReservationsByPage(
                page - 1,
                newPerPage
            );
            setReservations(data.content);
            setPerPage(newPerPage);
            setTotalRows(data.totalElements);
        } catch (error) {
            utils.functions.swalToast(
                "There was an error while changing the page",
                "error"
            );
        }
    };

    const handlePageChange = (page) => {
        // data table componentinin indexi 1'den basladigi icin parametreden gelen page sayisindan 1 azaltiyoruz.
        loadData(page - 1);
    };

    const handleRowClicked = (row) => {
        navigate(`${routes.adminReservations}/${row.id}`);
    };

    return (
        <div className="admin-reservations-page">
            <Button onClick={handleDownload} disabled={loading}>
                {downloading && <Spinner animation="border" size="sm" />}{" "}
                Download Reservation Data
            </Button>

            <div className="admin-reservations-table-container">
                <DataTable
                    title="Reservations"
                    columns={utils.tables.adminReservationsColumns}
                    data={reservations}
                    progressPending={loading}
                    progressComponent={<Loading height={500} />}
                    paginationTotalRows={totalRows}
                    onChangeRowsPerPage={handlePerPageRowsChange}
                    onChangePage={handlePageChange}
                    paginationPerPage={perPage}
                    onRowClicked={handleRowClicked}
                    pagination
                    paginationServer
                    highlightOnHover
                />
            </div>
        </div>
    );
};

export default AdminReservationsPage;
