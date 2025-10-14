import { Suspense } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes />
      </Suspense>
    </>
  );
};

export default App;
