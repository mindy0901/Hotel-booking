import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Datatable from "../components/Datatable";

const List = ({ columns }) => {
      return (
            <div className="list">
                  <Sidebar />
                  <div className="list__container">
                        <Navbar />
                        <Datatable columns={columns} />
                  </div>
            </div>
      )
}

export default List