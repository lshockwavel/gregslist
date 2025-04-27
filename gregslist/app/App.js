import { HouseController } from "./controllers/HouseController.js"
import { JobController } from "./controllers/JobController.js";


class App {
  HouseController = new HouseController();
  JobController = new JobController();
}

window['app'] = new App()


