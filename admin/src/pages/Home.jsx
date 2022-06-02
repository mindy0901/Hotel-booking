import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Total from "../components/Total";

const Home = () => {
      return (
            <div className="home">
                  <Sidebar />
                  <div className="home__container">
                        <Navbar />
                        <div className="charts">
                              <Total />
                              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                        </div>
                  </div>
            </div>
      );
};

export default Home;
