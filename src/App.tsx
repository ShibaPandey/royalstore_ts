import { Suspense } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import Routes from "./routes/Routes";

const App = () => {
  const isAuth = false;
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={isAuth} />
      </Suspense>
    </>
  );
};

export default App;
