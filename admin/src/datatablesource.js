export const userColumns = [
      { field: "_id", headerName: "ID", width: 120 },
      {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                  return (
                        <div className="cellWithImg">
                              <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
                              {params.row.username}
                        </div>
                  );
            },
            valueGetter: (params) => `${params.row.user || ''}`,
      },
      {
            field: "email",
            headerName: "Email",
            width: 300,
            valueGetter: (params) => `${params.row.email || ''}`,
      },

      {
            field: "country",
            headerName: "Country",
            width: 120,
      },
      {
            field: "city",
            headerName: "City",
            width: 120,
      },
      {
            field: "phoneNumber",
            headerName: "Phone",
            width: 200,
            valueGetter: (params) => `${params.row.phoneNumber || ''}`,
      },
];

export const hotelColumns = [
      { field: "_id", headerName: "ID", width: 200, sortable: false, },
      {
            field: "name",
            headerName: "Name",
            width: 200,
            sortable: false,
            valueGetter: (params) => `${params.row.name || ''}`,
      },
      {
            field: "type",
            headerName: "Type",
            width: 120,
            valueGetter: (params) => `${params.row.type || ''}`,
      },
      {
            field: "title",
            headerName: "Title",
            width: 300,
            sortable: false,
      },
      {
            field: "city",
            headerName: "City",
            width: 100,
            valueGetter: (params) => `${params.row.city || ''}`,
      },
];

export const roomColumns = [
      { field: "_id", headerName: "ID", width: 100 },
      {
            field: "title",
            headerName: "Title",
            width: 230,
            sortable: false,
      },
      {
            field: "desc",
            headerName: "Description",
            width: 300,
            sortable: false,
      },
      {
            field: "price",
            headerName: "Price",
            width: 120,
      },
      {
            field: "maxPeople",
            headerName: "Max People",
            width: 120,
      },
];
