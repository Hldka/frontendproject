import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../../../services";
import { utils } from "../../../utils";
import { constants } from "../../../constants";
import DataTable from "react-data-table-component";
import { Loading } from "../../../components";
import "./style.scss";

const { routes } = constants;

const AdminContactMessagesPage = () => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const navigate = useNavigate();

    const loadData = async (page) => {
        try {
            const data = await services.contact.getMessagesByPage(
                page,
                perPage
            );
            setMessages(data.content);
            setTotalRows(data.totalElements);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePerPageRowsChange = async (newPerPage, page) => {
        // data table componentinin indexi 1'den basladigi icin parametreden gelen page sayisindan 1 azaltiyoruz.
        try {
            const data = await services.contact.getMessagesByPage(
                page - 1,
                newPerPage
            );
            setMessages(data.content);
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
        navigate(`${routes.adminContactMessages}/${row.id}`);
    };

    return (
        <div className="admin-contact-messages-page">
            <div className="admin-contact-messages-table-container">
                <DataTable
                    title="Contact Messages"
                    columns={utils.tables.adminContactMessagesColumns}
                    data={messages}
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

export default AdminContactMessagesPage;
