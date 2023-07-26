import { useEffect, useState } from "react";
import { constants } from "../../../constants";
import { Button, Spinner } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { utils } from "../../../utils";
import { services } from "../../../services";
import { Loading } from "../../../components";
import { useNavigate } from "react-router-dom";

const { routes } = constants;

const AdminUsersPage = () => {
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const navigate = useNavigate();

    const loadData = async (page) => {
        try {
            const data = await services.user.getUsersByPage(page, perPage);
            setUserData(data.content);
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
            const download = await services.user.downloadUserReports();
        } catch (error) {
            console.log(error);
        } finally {
            setDownloading(false);
        }
    };

    const handlePerPageRowsChange = async (newPerPage, page) => {
        try {
            const data = await services.user.getUsersByPage(page, newPerPage);
            setUserData(data.content);
            setPerPage(newPerPage);
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
        console.log(row);
        navigate(`${routes.adminUsers}/${row.id}`);
    };

    useEffect(() => {
        loadData(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="admin-users-page">
            <Button onClick={handleDownload} disabled={loading}>
                {downloading && <Spinner animation="border" size="sm" />}{" "}
                Download User Data
            </Button>

            <div className="admin-users-table-container">
                <DataTable
                    title="Users"
                    columns={utils.tables.adminUserColumns}
                    data={userData}
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

export default AdminUsersPage;
