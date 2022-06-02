import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDataByPath, getDataByPath } from '../redux/actions/dataAction';
import Loading from "./Loading";


const Datatable = ({ columns }) => {
      const { datas, loading } = useSelector((state) => state.dataReducer)
      const location = useLocation();
      const path = location.pathname.split("/")[1];
      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(getDataByPath(path))
      }, [path, dispatch]);

      const handleDelete = async (id) => {
            dispatch(deleteDataByPath(path, id))
      };

      const actionColumn = [{
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => (
                  <div className="cellAction">
                        <div className="viewButton">Update</div>
                        <button className="deleteButton" onClick={() => handleDelete(params.row._id)} >
                              Delete
                        </button>
                  </div>
            )
      }];

      if (loading) return <Loading />

      return (

            <div className="datatable">
                  <div className="datatable__title">
                        {path}
                        <Link to={`/${path}/new`} className="link">
                              Add New
                        </Link>
                  </div>
                  <div style={{ height: 700, width: '100%' }}>
                        <DataGrid
                              rows={datas}
                              columns={columns.concat(actionColumn)}
                              pageSize={10}
                              rowsPerPageOptions={[10]}
                              getRowId={(row) => row._id}
                              disableSelectionOnClick
                        />
                  </div>
            </div>

      );
}

export default Datatable