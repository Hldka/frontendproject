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
