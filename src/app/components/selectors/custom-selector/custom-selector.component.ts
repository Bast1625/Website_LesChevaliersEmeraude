import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-selector',
  standalone: true,
  imports: [
        CommonModule,
        FormsModule
    ],
  templateUrl: './custom-selector.component.html',
  styleUrl: './custom-selector.component.scss',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CustomSelectorComponent),
        multi: true
    }
  ]
})

export class CustomSelectorComponent implements OnInit, ControlValueAccessor
{
    @Output() public onSelection : EventEmitter<any> = new EventEmitter<any>();

    public get selection() : string
    {
        return this._selection;
    }
    public set selection(newSelection : string)
    {
        this._selection = newSelection;
        this.propagateChange(this._selection);
    }

    public defaultValue : { value: any, textContent: string} = { value: 0, textContent: "_" };
    public data : { value: any, textContent: string }[] = [];
    
    public propagateChange = (_ : any) => { };
    private _selection : any = this.defaultValue;

    public ngOnInit() : void 
    {
        
    }

    public writeValue(obj : any) : void
    {
        this.selection = obj;        
    }

    public registerOnChange(fn: any): void 
    {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void { }
}
