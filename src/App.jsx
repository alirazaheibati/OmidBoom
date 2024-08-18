import { useApi1 } from "./Api/api1/index";
import { useApi2 } from "./Api/api2/index";

function App() {
  const {
    data: api1Data,
    isLoading: api1Loading,
    error: api1Error,
  } = useApi1();
  const {
    mutate: callApi2,
    isLoading: api2Loading,
    error: api2Error,
  } = useApi2();

  if (api1Loading || api2Loading) return <div>Loading...</div>;
  if (api1Error) return <div>Error in API 1: {api1Error.message}</div>;
  if (api2Error) return <div>Error in API 2: {api2Error.message}</div>;

  return (
    <div>
      <h1>Posts (API 1)</h1>
      <pre>{JSON.stringify(api1Data, null, 2)}</pre>
      <button onClick={() => callApi2()}>
        Call Users (API 2) and Update Posts (API 1)
      </button>
    </div>
  );
}

export default App;
