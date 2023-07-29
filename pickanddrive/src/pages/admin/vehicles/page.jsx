import { useState } from "react";
import { constants } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../../../services";
import { utils } from "../../../utils";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Loading } from "../../../components";
import "./style.scss";

const { routes } = constants;

const AdminVehiclesPage = () => {
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);
    const [vehicles, setVehicles] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();

    const loadData = async (page) => {
        try {
            const vehiclesData = await services.vehicle.getVehiclesByPage(
                page,
                perPage
            );
            setVehicles(vehiclesData?.content);
            setTotalRows(vehiclesData?.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async () => {
        setDownloading(true);
        try {
            const download = await services.vehicle.downloadVehicleReports();
            const url = window.URL.createObjectURL(download);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "vehicles.xlsx");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            utils.functions.swalToast(
                "Vehicle data downloaded successfully!",
                "success"
            );
        } catch (error) {
            utils.functions.swalToast(
                "There was an error while downloading vehicle data!",
                "error"
            );
        } finally {
            setDownloading(false);
        }
    };

    const handlePerPageRowsChange = async (newPerPage, page) => {
        // data table componentinin indexi 1'den basladigi icin parametreden gelen page sayisindan 1 azaltiyoruz.
        try {
            const data = await services.vehicle.getVehiclesByPage(
                page - 1,
                newPerPage
            );
            setVehicles(data.content);
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
        navigate(`${routes.adminVehicles}/${row.id}`);
    };

    return (
        <div className="admin-vehicles-page">
            <ButtonGroup className="align-self-end">
                <Button as={Link} to={`${routes.adminVehicles}/new`}>
                    New Vehicle
                </Button>
                <Button onClick={handleDownload} disabled={loading}>
                    {downloading && <Spinner animation="border" size="sm" />}{" "}
                    Download Vehicle Reports
                </Button>
            </ButtonGroup>

            <div className="admin-vehicles-table-container">
                <DataTable
                    title="Vehicles"
                    columns={utils.tables.adminVehiclesColumns}
                    data={vehicles}
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
                    responsive
                />
            </div>
        </div>
    );
};

export default AdminVehiclesPage;
