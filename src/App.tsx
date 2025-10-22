import { Suspense } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import Routes from "./routes/Routes";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";


const App = () => {
const isAuth = useSelector((state:RootState)=>state.auth.isAuth)
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={isAuth} />
      </Suspense>
    </>
  );
};

export default App;
