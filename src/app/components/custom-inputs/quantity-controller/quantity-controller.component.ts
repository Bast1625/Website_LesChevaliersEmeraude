import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'quantity-controller',
  standalone: true,
  imports: [
        CommonModule,
        FontAwesomeModule
    ],
  templateUrl: './quantity-controller.component.html',
  styleUrl: './quantity-controller.component.scss'
})

export class QuantityControllerComponent implements OnInit
{
    public FaAddIcon = faPlusCircle;
    public FaRemoveIcon = faMinusCircle;

    @Input() public minimumQuantity : number = 1;
    @Input() public currentQuantity : number = 1;
    @Input() public maximumQuantity : number = 1;

    @Output() public onAdd : EventEmitter<void> = new EventEmitter<void>();
    @Output() public onRemove : EventEmitter<void> = new EventEmitter<void>();

    public ngOnInit() : void
    {
        for(let i = 0; i < this.minimumQuantity - 1; i++)
            this.add();
    }

    public add() : void
    {
        this.onAdd.emit();
    }

    public remove() : void
    {
        this.onRemove.emit();
    }
}
