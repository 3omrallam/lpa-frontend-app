import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchOperationService {
  
  programmingLangs : Array<String> = ["Javascript", "Python", "Angular", "React", "Nodejs", "Laravel", "Github", "PHP"]
 
  triggerClick(actionBTN: any) {
    let el: HTMLElement = actionBTN?.nativeElement as HTMLElement;
    el.click()
  }


}
