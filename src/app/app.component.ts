import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgContainerComponent } from './img-container/img-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ImgContainerComponent, CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'mcatube';
    inputText = '';
    uploads = [
        {
            srNo: 1,
            img: 'https://media.geeksforgeeks.org/wp-content/uploads/20240701151250/AngularJS-Tutorial-copy.webp',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Ronak Bhalala',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tMPf1GfjK6hilt2NDTvqQgFJcqL4-Ez4A&s',
            view: '1.2M',
        },
        {
            srNo: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXcteYEfqEgEdeyGz23WjRe-pEw9NrCcJ6g&s',
            imgTitle: 'JDBC tutorial : #3',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://www.vhv.rs/dpng/d/459-4590307_png-file-svg-java-logo-black-and-white.png',
            view: '1.2M',
        },
        {
            srNo: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPQHaD2aHMrvOsgf3B529QJHKjjeVY8HXYg&s',
            imgTitle: 'Performaring SQL INJECTION today',
            creatorName: 'Ronak Bhalala',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW1GlKu3d9RpRk7aLAQIosciuEB1CYaHJVQ&s',
            view: '1.2M',
        },
        {
            srNo: 4,
            img: 'https://i.ytimg.com/vi/FfVWSvl1Bg4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzNP6xCmlaEGC2qhITR3PDNgPssw',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsFUkKtQDhOaNlzJTg-0eDunBBfu865jJgQ&s',
            view: '1.2M',
        },
        {
            srNo: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqMsyrpXJ7wLOddQPg6didsdHe5vBvB9aYw&s',
            imgTitle: 'Android activity lifecycle full explaination',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxemQM32dozBjw4skkAE-yKI04QbefuA7miA&s',
            view: '1.2M',
        },
        {
            srNo: 6,
            img: 'https://artoftesting.com/wp-content/uploads/2019/12/waterfall-model-featured.jpg',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://i.scdn.co/image/ab6765630000ba8aa3c190737fae79d732e1b588',
            view: '1.2M',
        },
        {
            srNo: 7,
            img: 'https://i.ytimg.com/vi/AS8uKMWMyRc/mqdefault.jpg',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YdGNupCOO9-shGIrKRQ4xq8G2aHLxUa30w&s',
            view: '1.2M',
        },
    ];

    imageData: any = [];
    channels: any = [];
    visibleChannel: boolean = false;

    ngOnInit() {
        this.imageData = this.uploads;
        this.channels = new Set(this.uploads.map((key) => key.creatorName));
    }
    handleChannel() {
        if (this.visibleChannel) {
            this.visibleChannel = false;
        } else {
            this.visibleChannel = true;
        }
    }
    showContent(channelName: string) {
        // alert(channelName);
        this.imageData = this.uploads.filter(
            (e) => e.creatorName == channelName
        );
    }
    reset() {
        this.imageData = this.uploads;
        this.inputText = '';
    }
    findSearch() {
        if (this.inputText.length == 0) {
            this.imageData = this.uploads;
        } else {
            this.imageData = this.uploads.filter(
                (e) => e.creatorName == this.inputText
            );
        }
        // console.log(this.imageData);
    }
}
