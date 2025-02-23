import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, DialogModule,SliderModule, CommonModule,DropdownModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent{
  visible = true;
  rangeValues: number[] = [69, 1560];
  minPrice = this.rangeValues[0]
  maxPrice = this.rangeValues[1]

  //Esses dados vão vir da api de um modelo que ainda esta em desenvolvimento
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  roomsAndBeds: any[] = [{name:"Teste", code:1},{name:"Teste1",code:1},{name:"Test2",code:1}]
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  selectedRoomsAndBeds: any | undefined = this.roomsAndBeds[0];

  showFilterDialog(){
    this.visible = !this.visible;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  handleRangeChange(event: any) {
    if (event.values[0] < this.maxPrice){
      this.minPrice = event.values[0];
    }
    if (event.values[1] > this.minPrice){
      this.maxPrice = event.values[1];
    }
  }
}
