import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


type LabelSide = 'left' | 'right';
interface Mark {
  id: string;
  label: string;
  x: number; // SVG coords (viewBox units)
  y: number;
  labelSide: LabelSide;
}

@Component({
  selector: 'app-anatomy',
  standalone: false,
  templateUrl: './anatomy.component.html',
  styleUrl: './anatomy.component.scss'
})
export class AnatomyComponent {
  constructor(private router: Router) { }

  // label callout offset in SVG units
  labelOffset = 80;

  // logic unchanged: we render only front
  get currentMarks(): Mark[] {
    return this.marksFront;
  }

  go(m: Mark) {
    Swal.fire({
      toast: true,
      icon: 'info',
      position: 'top-end',
      // title: `Opening ${m.label ?? m.id}…`,
      title:"Coming Soon!!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });

    // this.router.navigate(['/section', m.id], {
    //   queryParams: { label: m.label ?? m.id, from: 'anatomy' }
    // });
    // this.router.navigate(['/section', m.id]);
  }

  // === Hotspots for FRONT view ===
  // These coordinates are tuned for a 300x800 viewBox and a realistic human front.
  // If your pasted SVG asset is scaled using the single transform on #eps-asset,
  // these will still align. If your figure is unusually proportioned, only adjust
  // the transform in HTML (not these numbers).
  marksFront: Mark[] = [
    { id: 'head', label: 'Head', x: 150, y: 70, labelSide: 'right' },

    { id: 'left-arm', label: 'Left Arm', x: 92, y: 210, labelSide: 'left' },
    { id: 'right-arm', label: 'Right Arm', x: 208, y: 210, labelSide: 'right' },

    { id: 'left-hand', label: 'Left Hand', x: 60, y: 428, labelSide: 'left' },
    { id: 'right-hand', label: 'Right Hand', x: 240, y: 428, labelSide: 'right' },

    { id: 'stomach', label: 'Stomach (Abdomen)', x: 150, y: 340, labelSide: 'right' },
    { id: 'heart', label: 'Heart', x: 135, y: 280, labelSide: 'left' },
    { id: 'left-lung', label: 'Left Lung', x: 124, y: 240, labelSide: 'left' },
    { id: 'right-lung', label: 'Right Lung', x: 176, y: 240, labelSide: 'right' },

    { id: 'left-kidney', label: 'Left Kidney (approx.)', x: 135, y: 330, labelSide: 'left' },
    { id: 'right-kidney', label: 'Right Kidney (approx.)', x: 165, y: 330, labelSide: 'right' },

    { id: 'pelvis', label: 'Pelvic Region', x: 150, y: 430, labelSide: 'right' },

    { id: 'left-leg', label: 'Left Leg', x: 120, y: 600, labelSide: 'left' },
    { id: 'right-leg', label: 'Right Leg', x: 180, y: 600, labelSide: 'right' },

    { id: 'left-foot', label: 'Left Foot', x: 120, y: 760, labelSide: 'left' },
    { id: 'right-foot', label: 'Right Foot', x: 180, y: 760, labelSide: 'right' },
  ];

  disablePrev = false;  // set true on first step if needed
  disableNext = false;  // set true while saving/loading, etc.

  onPrev() {
    // TODO: implement your previous-step navigation
    // e.g., this.step--; or this.router.navigate([...]);
  }

  onNext() {
    this.router.navigate(['/home']);
    // TODO: implement your next-step navigation
    // e.g., this.step++; or this.router.navigate([...]);
  }
}