import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import News from "../../components/news/news";

const LatestNews = () => {
  const isSigned = useSelector((state) => state.login.isSigned);

  const [signedStatus, setSignedStatus] = useState(() => {
    return JSON.parse(localStorage.getItem("isSigned"));
  });

  useEffect(() => {
    setSignedStatus(JSON.parse(localStorage.getItem("isSigned")));
  }, [isSigned]);

  const { latestNews } = useSelector((store) => store?.news || {});
  const { latestNewsError } = useSelector((store) => store?.errors || {});
  const { isDataLoading } = useSelector((store) => store?.loader || {});

  return (
    <>
      {signedStatus && (
        <div>
          {isDataLoading ? (
            <h3>Loading...</h3>
          ) : (
            <News
              news={latestNews}
              error={latestNewsError}
              title="Latest News"
            />
          )}
        </div>
      )}
      {!signedStatus && <p>Please login to view this page</p>}
    </>
  );
};

export default LatestNews;
