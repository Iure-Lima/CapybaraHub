import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  visible = false;
  position = 'center';


  showFilterDialog(){
    this.visible = !this.visible;
  }
}
