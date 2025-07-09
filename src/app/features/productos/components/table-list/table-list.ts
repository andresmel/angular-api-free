import { Component, signal ,Input, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-list',
  imports: [CommonModule],
  templateUrl: './table-list.html',
  styleUrl: './table-list.scss'
})

export class TableList {
 @Input() productos: any[] = [];

  productosSignal = signal<any[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productos']) {
      this.productosSignal.set(this.productos);
    }
  }

  editProduct(producto: any) {
    console.log(producto);
  }

}
