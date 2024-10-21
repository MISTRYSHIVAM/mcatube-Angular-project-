import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-img-container',
    standalone: true,
    imports: [],
    templateUrl: './img-container.component.html',
    styleUrl: './img-container.component.css',
})
export class ImgContainerComponent {
    @Input() public uploadInfo: any;
}
