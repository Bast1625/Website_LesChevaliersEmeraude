import { Component } from '@angular/core';

import { SheetHeaderComponent } from './sheet-header/sheet-header.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [SheetHeaderComponent],
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})

export class SheetComponent 
{

}
