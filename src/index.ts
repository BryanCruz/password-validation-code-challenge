import app from "./api/app";
import config from "./config";

const { apiPort: appPort } = config;

app.listen(appPort, () => {
  console.log(`Server is running in http://localhost:${appPort}`);
});
