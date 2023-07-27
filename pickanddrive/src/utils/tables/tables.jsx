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
