import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VehicleCard {
  name: string;
  text: string;
  imgUrl: string;
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
    { name: 'Yamaha Jog', text: '...', imgUrl: 'mocik/jog.jpg' },
    { name: 'Yamaha Vino', text: '...', imgUrl: 'mocik/vino.jpg' },
    { name: 'Gilera Runner', text: '...', imgUrl: 'mocik/runner.jpg' },
    { name: 'Yamaha YBR 125', text: '...', imgUrl: 'mocik/ybr.jpg' },
    { name: 'Kawasaki Er-5', text: '...', imgUrl: 'mocik/er5.jpg' },
    { name: 'Yamaha FZ6n', text: '...', imgUrl: 'mocik/fz6.jpg' },
    { name: 'Suzuki GSR600', text: '...', imgUrl: 'mocik/gsr600.jpg' },
    { name: 'Audi A4', text: '...', imgUrl: 'mocik/audi.jpg' },
  ];
}
