import {useEffect} from "react";
import {useSelector} from "react-redux";
import {authSelector} from "../../redux/reducers/selectors";
import {useHistory} from "react-router";

const Page401 = () => {
    const { auth } = useSelector(authSelector)
    const history = useHistory()

    useEffect(() => {
        if(auth) history.push('/')
    }, [auth])

    return (
        <div>
            You don't have access to this page. Login to gain accesss.
        </div>
    );
};

export default Page401;