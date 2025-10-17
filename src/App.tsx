import { Suspense } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import Routes from "./routes/Routes";
import { isAuth } from "./api/auth";

const App = () => {
  const user = isAuth();
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes user={user} />
      </Suspense>
    </>
  );
};

export default App;
