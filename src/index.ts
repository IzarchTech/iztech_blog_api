import App from "./app";
import { config } from "./utils/config";

new App(config.PORT).listen();
