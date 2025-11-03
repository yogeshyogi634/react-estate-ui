import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import { listData } from "../../libs/dummyData";
import "./listPage.scss";
import Map from "../../components/map/Map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
        {/* map */}
      </div>
    </div>
  );
};

export default ListPage;
