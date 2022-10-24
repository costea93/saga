import { useSelector } from "react-redux";
import News from "../../components/news/news";
import { useEffect } from "react";
import { useHistory } from "react-router";

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});
  const { userLogged } = useSelector(state => state.setUserAuth)
  const history = useHistory()

  useEffect(() => {
    if (!userLogged) history.push('/')
  }, [userLogged])

  return (
    <div>
      {isDataLoading ?
        <h3>Loading...</h3> :
        <News news={popularNews} error={popularNewsError} title="Popular News" />
      }
    </div>
  );
};

export default App;
