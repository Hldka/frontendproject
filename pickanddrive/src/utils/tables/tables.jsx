const API_URL = import.meta.env.VITE_APP_API_URL;

export const adminUserColumns = [
    {
        name: "First Name",
        selector: (row) => row?.firstName,
    },
    {
        name: "Last Name",
        selector: (row) => row?.lastName,
    },
    {
        name: "Email",
        selector: (row) => row?.email,
    },
    {
        name: "Roles",
        selector: (row) => row?.roles?.join("—"),
    },
];

export const adminReservationsColumns = [
    {
        name: "Vehicle",
        selector: (row) => row?.car?.model,
    },
    {
        name: "Pickup",
        selector: (row) => row?.pickUpLocation,
    },
    {
        name: "Dropoff",
        selector: (row) => row?.dropOffLocation,
    },
    {
        name: "Price",
        selector: (row) => `$ ${row?.totalPrice}`,
    },
];

export const adminContactMessagesColumns = [
    {
        name: "Sender Name",
        selector: (row) => row?.name,
        sortable: true,
    },
    {
        name: "Sender Email",
        selector: (row) => row?.email,
        sortable: true,
    },
    {
        name: "Subject",
        selector: (row) => row?.subject,
        sortable: true,
    },
];

export const adminVehiclesColumns = [
    {
        name: "Image",
        selector: (row) => (
            <img
                src={`${API_URL}/files/display/${row?.image[0]}`}
                alt={row?.model}
                title={row?.model}
                width={100}
                style={{
                    pointerEvents: "none",
                }}
            />
        ),
    },
    {
        name: "Model",
        selector: (row) => row?.model,
    },
    {
        name: "Age",
        selector: (row) => row?.age,
    },
    {
        name: "Price/hour",
        selector: (row) => `$ ${row?.pricePerHour}`,
    },
];
