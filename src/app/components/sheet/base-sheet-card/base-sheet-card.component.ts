import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-sheet-card',
  standalone: true,
  imports: [],
  templateUrl: './base-sheet-card.component.html',
  styleUrl: './base-sheet-card.component.scss'
})
export class BaseSheetCardComponent implements OnInit
{
    @Output() public onFormReady = new EventEmitter<{ name: string, content: FormGroup }>();
    @Input() public formName : string = "";

    public formContent : FormGroup = this.formBuilder.group({ });

    public constructor(protected formBuilder : FormBuilder) { }

    public ngOnInit(): void 
    {
        setTimeout(() => this.onFormReady.emit({ name: this.formName, content: this.formContent }), 0);    
    }

}
