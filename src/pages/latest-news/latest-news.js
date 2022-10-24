import { useSelector } from "react-redux";
import News from "../../components/news/news";
import { useEffect } from "react";
import { useHistory } from "react-router";

const LatestNews = () => {
  const history = useHistory()
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});
  const { userLogged } = useSelector(state => state.setUserAuth)

  useEffect(() => {
    if (!userLogged) history.push('/')
  }, [userLogged])

  return (
    <div>
      {isDataLoading ?
        <h3>Loading...</h3> :
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      }
    </div>
  );
};

export default LatestNews;
