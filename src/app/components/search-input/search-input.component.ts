import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchOperationService } from 'src/app/services/search-operation.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent {

  @ViewChild('reset') resetBTN : any

  profileForm = new FormGroup({
    lang: new FormControl(''),
  });
  
  constructor(public _SearchOperationService : SearchOperationService){}

  onSubmit(){
    this._SearchOperationService.addTag(this.profileForm.value)
    this._SearchOperationService.triggerClick(this.resetBTN)
  }

}
