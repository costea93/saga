import { useSelector } from "react-redux";
import News from "../../components/news/news";
import {authSelector} from "../../redux/reducers/selectors";
import {useHistory} from "react-router";
import {useEffect} from "react";

const LatestNews = () => {
  const history = useHistory()
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});
  const { auth } = useSelector(authSelector)

  useEffect(() => {
    if(!auth) history.push('/401')
  }, [auth])

  return(
    <div>
      {isDataLoading ?
        <h3>Loading...</h3> :
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      }
    </div>
  );
};

export default LatestNews;
