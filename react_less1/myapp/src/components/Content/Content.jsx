import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProdTitle from "./ProdTitle";
import Product from "./Product";
import { getContentItems } from "../../Redux/actions/getContentItems.action";
const Content = () => {
  const { title } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(getContentItems(`http://localhost:8081/menu${title}`));
    } else {
      dispatch(getContentItems(`http://localhost:8081/menu`));
    }
  }, [title, dispatch]);

  const contentData = useSelector((state) => state.contentItems.contentItems);

  const RenderData = (data) => {
    return data.map((datakey) => (
      <div key={datakey._id}>
        <ProdTitle data={datakey.title} />
        <Product prod={datakey} />
      </div>
    ));
  };
  return (
    <div>
      <div className="w-full bg-[#1a191a]">{RenderData(contentData)}</div>
    </div>
  );
};

export default Content;
