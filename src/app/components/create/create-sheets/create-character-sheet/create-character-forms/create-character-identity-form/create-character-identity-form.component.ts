import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationSelectorComponent } from '../../../../../custom-inputs/selectors/location-selector/location-selector.component';

@Component({
  selector: 'app-create-character-identity-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    LocationSelectorComponent
],
  templateUrl: './create-character-identity-form.component.html',
  styleUrl: './create-character-identity-form.component.scss'
})

export class CreateCharacterIdentityFormComponent implements OnInit
{
    @Output() public onFormReady : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    
    public createCharacterIdentityForm : FormGroup = this.formBuilder.group({     
        characterName: [ 'Personnage', [ Validators.required, Validators.minLength(2) ] ],
        characterGender: ['M', Validators.required],
        characterRaces: ['']
    });

    public constructor(private formBuilder : FormBuilder) {
    }
    
    public ngOnInit() : void 
    {
        setTimeout(() => {
            this.onFormReady.emit(this.createCharacterIdentityForm);
        }, 0);
    }
}
