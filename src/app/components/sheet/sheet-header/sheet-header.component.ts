import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sheet-header',
  standalone: true,
  imports: [
        CommonModule,
        RouterLink
    ],
  templateUrl: './sheet-header.component.html',
  styleUrl: './sheet-header.component.scss'
})

export class SheetHeaderComponent 
{
    @Output() onCreate = new EventEmitter<void>();

    @Input() public title : string | undefined = "";
    @Input() public isFormValid : boolean = false;
}
