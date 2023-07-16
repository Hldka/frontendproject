import { Pagination } from "react-bootstrap";

const CustomPagination = (props) => {
    return (
        <Pagination className="justify-content-center">
            <Pagination.First
                onClick={() => props.loadData(0)}
                disabled={props.paging?.pageNumber === 0}
            />
            <Pagination.Prev
                onClick={() => props.loadData(props.paging?.pageNumber - 1)}
                disabled={props.paging?.pageNumber === 0}
            />
            {[...Array(props.paging?.totalPages)].map((item, index) => (
                <Pagination.Item
                    key={index}
                    active={index === props.paging?.pageNumber}
                    onClick={() => index != props.paging?.pageNumber && props.loadData(index)}>
                    {index + 1}
                </Pagination.Item>
            ))}
            <Pagination.Next
                onClick={() => props.loadData(props.paging?.pageNumber + 1)}
                disabled={
                    props.paging?.pageNumber >= props.paging?.totalPages - 1
                }
            />
            <Pagination.Last
                onClick={() => props.loadData(props.paging?.totalPages - 1)}
                disabled={
                    props.paging?.pageNumber >= props.paging?.totalPages - 1
                }
            />
        </Pagination>
    );
};

export default CustomPagination;
