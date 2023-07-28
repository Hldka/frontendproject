import "./table-row.scss";

const TableRow = (props) => {
    return (
        <tr className="table-row__content">
            <td>
                {props.title} <span>:</span>
            </td>
            <td>{props.content}</td>
        </tr>
    );
};

export default TableRow;
