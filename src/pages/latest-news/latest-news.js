import { useSelector } from "react-redux";
import News from "../../components/news/news";
import { authSelector } from "../../redux/reducers/selectors";
import Page401 from "../unauthorized/unauthorized";

const LatestNews = () => {
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});

  const {auth} = useSelector(authSelector)

  return(
    auth?<div>
      {isDataLoading ?
        <h3>Loading...</h3> :
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      }
    </div>:<Page401 />
  );
};

export default LatestNews;
