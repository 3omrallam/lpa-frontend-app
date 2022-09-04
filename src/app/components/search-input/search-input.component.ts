import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchOperationService } from 'src/app/services/search-operation.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent {
  @ViewChild('reset') resetBTN : any
  
  constructor(public _SearchOperationService : SearchOperationService){}

  onSubmit(formValue : any){
    this._SearchOperationService.addTag(formValue)
    this._SearchOperationService.triggerClick(this.resetBTN)
  }

  

}
