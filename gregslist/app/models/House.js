import { generateId } from "../utils/GenerateId.js"

export class House {
    /**
     * @param {{
     * id: string,
     * bedrooms: number,
     * bathrooms: number,
     * year: number,
     * price: number,
     * imgUrl: string,
     * description: string,
     * levels: number,
     * sqft: number,
     * address: string
     * }} data
     */
    constructor(data) {
        this.id = generateId();
        this.bedrooms = data.bedrooms;
        this.bathrooms = data.bathrooms;
        this.year = data.year;
        this.price = data.price;
        this.imgUrl = data.imgUrl || 'https://images.unsplash.com/photo-1652512455891-11933272bc1f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        this.description = data.description;
        this.sqft = data.sqft;
        this.address = data.address;
    }

    get HouseCard() {
        return /*html*/ `
        <div class="col-4">
            <div class="card mb-3">
                <img src="${this.imgUrl}" class="house-card" alt="${this.description}">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} bed, ${this.bathrooms} bath</h5>
                    <p class="card-text">${this.description}</p>
                    <p class="card-text"><small class="text-muted">Year: ${this.year}</small></p>
                    <p class="card-text"><small class="text-muted">Price: $${this.price.toLocaleString()}</small></p>
                    <p class="card-text"><small class="text-muted">Sqft: ${this.sqft}</small></p>
                    <p class="card-text"><small class="text-muted">Address: ${this.address}</small></p>
                    <button class="btn btn-danger" onclick="app.HouseController.deleteHouse('${this.id}')">Delete</button>
                    <button class="btn btn-primary" onclick="app.HouseController.editHouse('${this.id}')">Edit(WIP)</button>
                </div>
            </div>
        </div>
        `
    }
}