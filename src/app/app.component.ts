import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgContainerComponent } from './img-container/img-container.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ImgContainerComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'mcatube';
    uploads = [
        {
            srNo: 1,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 2,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 3,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 4,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 5,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 6,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
        {
            srNo: 7,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            view: '1.2M',
        },
    ];
}
