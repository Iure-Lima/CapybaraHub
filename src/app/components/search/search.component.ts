import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {}
