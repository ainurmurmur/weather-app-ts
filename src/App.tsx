import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Typography } from "antd";
import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import { isDayTime } from "./utils/getTime";
import "./index.css";

const App: FC = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector((state: RootState) => state.weather.data);
  const error = useSelector((state: RootState) => state.weather.error);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const alertMessage = useSelector((state: RootState) => state.alert.message);
  const dayColor = "linear-gradient(rgb(255, 220, 171), rgb(33, 140, 194))";
  const nightColor = "linear-gradient(rgb(90, 50, 255), rgb(4, 15, 117))";

  return (
    <Layout
      style={{ background: isDayTime ? dayColor : nightColor }}
      className="container"
    >
      <Typography.Title style={{ color: isDayTime ? "steelblue" : "wheat" }}>
        Weather app
      </Typography.Title>
      <Search title="Enter city name: " />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}

      {alertMessage && (
        <Alert message={alertMessage} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </Layout>
  );
};

export default App;
