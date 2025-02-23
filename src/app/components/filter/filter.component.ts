import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';




@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,InputNumberModule, DialogModule,SliderModule, CommonModule,DropdownModule,CalendarModule,FloatLabelModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  visible = true;
  rangeValues: number[] = [69, 1560];
  minPrice = this.rangeValues[0]
  maxPrice = this.rangeValues[1]

  //Calendar data
  @Input() selectedDates: Date[] = [];
  minDate: Date = new Date();
  disabledDates: Date[] = [];

  //Input Number
  inputNumber!: number;


  //Esses dados vão vir da api de um modelo que ainda esta em desenvolvimento
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  roomsAndBeds: any[] = [{name:"Teste", code:1},{name:"Teste1",code:1},{name:"Test2",code:1}]
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  selectedRoomsAndBeds: any | undefined = this.roomsAndBeds[0];

  ngOnInit(): void {
    this.minDate = new Date(this.minDate);
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

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
