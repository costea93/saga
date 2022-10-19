import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import News from "../../components/news/news";

const App = () => {
  const isSigned = useSelector((state) => state.login.isSigned);

  const [signedStatus, setSignedStatus] = useState(() => {
    return JSON.parse(localStorage.getItem("isSigned"));
  });

  useEffect(() => {
    setSignedStatus(JSON.parse(localStorage.getItem("isSigned")));
  }, [isSigned]);

  const { popularNews } = useSelector((store) => store?.news || {});
  const { popularNewsError } = useSelector((store) => store?.errors || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});

  return (
    <>
      {signedStatus && (
        <div>
          {isDataLoading ? (
            <h3>Loading...</h3>
          ) : (
            <News
              news={popularNews}
              error={popularNewsError}
              title="Popular News"
            />
          )}
        </div>
      )}
      {!signedStatus && <p>Please login to view this page</p>}
    </>
  );
};

export default App;
