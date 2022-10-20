import { useSelector } from "react-redux";
import News from "../../components/news/news";
import { useHistory } from "react-router";
import { useEffect } from "react";

const LatestNews = () => {
  const history = useHistory()
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});
  const { isLogged } = useSelector(state => state.userAuth)

  useEffect(() => {
    if (!isLogged) history.push('/401')
  }, [isLogged])

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
