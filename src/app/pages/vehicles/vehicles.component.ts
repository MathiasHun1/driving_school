import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VehicleCard {
  name: string;
  text: string;
}

@Component({
  standalone: true,
  selector: 'app-vehicles',
  imports: [CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesComponent {
  readonly vehicles: VehicleCard[] = [
    { name: 'Yamaha Jog', text: '...' },
    { name: 'Yamaha Vino', text: '...' },
    { name: 'Gilera Runner', text: '...' },
    { name: 'Yamaha YBR 125', text: '...' },
    { name: 'Kawasaki Er-5', text: '...' },
    { name: 'Yamaha FZ6n', text: '...' },
    { name: 'Suzuki GSR600', text: '...' },
    { name: 'Audi A4', text: '...' },
  ];
}
