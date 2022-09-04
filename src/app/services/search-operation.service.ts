import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchOperationService {
  
  programmingLangs : Array<String> = ["Javascript", "Python", "Angular", "React", "Nodejs", "Laravel", "Github", "PHP"]
  tagArray : Array<any> = []

  constructor() { }

  addTag(tagName : any){
    this.programmingLangs.includes(tagName.lang) && !this.tagArray.includes(tagName) && this.tagArray.push(tagName)
  }

  removeTag(ix : any){
    this.tagArray.splice(+ix, 1)
  }
  
  backBTN(event: any){
    event.code == 'Backspace' && !event.target.value && this.tagArray && this.tagArray.splice(this.tagArray.length - 1, 1)
  }

  triggerClick(actionBTN: any) {
    let el: HTMLElement = actionBTN?.nativeElement as HTMLElement;
    el.click()
  }


}
