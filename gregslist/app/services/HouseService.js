import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HouseService {
  /* 👷 */
  createHouse(houseData) {
    const house = new House(houseData);

    AppState.houses.unshift(house); //Add to the front of the array
    this.saveHouse(); // Save to local storage
  }

  /* 💾 */
  saveHouse() {
    const house = AppState.houses;
    const houseString = JSON.stringify(house);
    localStorage.setItem('gregslist_houses', houseString);
  }

  /* 💽 */
  loadHouses() {
    const houseString = localStorage.getItem('gregslist_houses');
    // If there is no data in local storage, then don't do anything
    if (houseString) {
      const houses = JSON.parse(houseString);
      AppState.houses = houses.map(h => new House(h)); /* REVIEW Is it like creating new House and overwriting it? Wondering if += could work in a similar format */
    }
  }

  /* 🚮 */
  deleteHouse(id) {
    AppState.houses = AppState.houses.filter(h => h.id !== id);
    this.saveHouse(); // Save to local storage
  }
}

export const houseService = new HouseService();