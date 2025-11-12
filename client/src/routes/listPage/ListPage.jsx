import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import "./listPage.scss";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {
  const posts = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
        {/* map */}
      </div>
    </div>
  );
};

export default ListPage;
