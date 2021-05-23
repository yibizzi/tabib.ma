import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesServiceService {


  constructor() { }

  //Convert Image to base64

  //Méthode 1
  encodeImageFileAsBase64(element: any) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
    return reader.result as string
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

    if (base64String && base64String.match("https.*")){
      return base64String;
    }

    return base64String ?
      `data:image/png;base64,${base64String}`
      :
      "https://source.unsplash.com/c_GmwfHBDzk/200x200";
  }


}


