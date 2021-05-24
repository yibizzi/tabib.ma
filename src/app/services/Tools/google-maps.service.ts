import { Addresse } from './../../models/userModels/doctor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  apiLink: string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc";


  getLinkFromAddress(address: Addresse | undefined | null) {
    if (!address) return this.apiLink;
    let query = `${address.details.replace(' ', '+')}+${address.city.replace(' ', '+')}+${address.country.replace(' ', '+')}`;
    return `${this.apiLink}&q=${query}`;
  }

  constructor() { }
}
