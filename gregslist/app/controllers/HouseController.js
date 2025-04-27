import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";




export class HouseController {
    constructor() {
        console.log('HouseController loaded');
        this.drawHouses();
        AppState.on('houses', this.drawHouses);
        houseService.loadHouses();
    }

    /* 📝 */
    drawHouses() {
        console.log('Drawing houses');
        let template = '';

        AppState.houses.forEach(h => template += h.HouseCard);

        document.getElementById('house-listings').innerHTML = template;
    }

    /* 👷 */
    createHouse() {
        console.log('Creating house');
        event.preventDefault();
        const form = event.target;
        console.log(form);
        console.log(form.description.value);

        // const houseData = getFormData(form);
        const houseData = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            year: form.year.value,
            price: form.price.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value,
            sqft: form.sqft.value,
            address: form.address.value
        };
        console.log('house data', houseData);
        houseService.createHouse(houseData);
        // this.drawHouses();

        // Reset the form after submission
        form.reset();

        // const formData = new FormData(form);
        // const data = Object.fromEntries(formData.entries());
        // console.log(data);
        // AppState.houses.push(data);
        // this.drawHouses();
    }

    

    /* 🚮 */
    deleteHouse(id) {
        // Creating a user confirmation before deleting the house
        console.log('Deleting house', id);
        const confirmDelete = confirm('Are you sure you want to delete this house?');
        if (confirmDelete) {
            houseService.deleteHouse(id);
        }
    }
}