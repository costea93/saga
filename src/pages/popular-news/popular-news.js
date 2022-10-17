import { useSelector } from "react-redux";
import News from "../../components/news/news";
import {useEffect} from "react";
import {authSelector} from "../../redux/reducers/selectors";
import {useHistory} from "react-router";

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});
  const { auth } = useSelector(authSelector)
  const history = useHistory()

  useEffect(() => {
    if(!auth) history.push('/401')
  }, [auth])

  return(
    <div>
    {isDataLoading ?
      <h3>Loading...</h3> :
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    }
    </div>
  );
};

export default App;
