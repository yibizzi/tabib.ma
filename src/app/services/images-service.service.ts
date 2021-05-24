import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {


  constructor() { }

  //Convert Image to base64

  //Méthode 1
  encodeImageFileAsBase64(file: any): Promise<string> {

    var reader = new FileReader();

    return new Promise<string>((resolve, reject) => {
      try {
        reader.onloadend = function () {
          console.log('RESULT', reader.result);
          resolve(reader.result as string);
        }
        reader.readAsDataURL(file);

      } catch {
        reject();
      }

    })

  }

  //Méthode 2
  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


  getImageSrcFromBase64(base64String: string | undefined): string {
    if (base64String && base64String.match("https.*")) {
      return base64String;
    }

    return base64String ?
      base64String
      :
      "https://source.unsplash.com/c_GmwfHBDzk/200x200";
  }


}


