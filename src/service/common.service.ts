import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * Decode html entity code.
   * @param {string} text items An array containing the items.
   */
  decodeHtml(text:string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  }

  /**
   * Shuffles array in place.
   * @param {any[]} array items An array containing the items.
   */
  shuffle(array:any[]) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
  }

  /**
   * Move to the top of the page.
   * @param {Document} document Page Document
   */
  toTheTop(document: Document){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
