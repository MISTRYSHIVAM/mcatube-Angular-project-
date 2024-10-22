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
            category : 'Education'
        },
        {
            srNo: 2,
            img: "https://th.bing.com/th?id=ORMS.61b6d5b5edb36c1e2dbee32e027ba8a0&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0",
            imgTitle: "Fun facts about IPL 2025 mega auction",
            creatorName: "Indian primer leauge",
            creatorImg: "https://th.bing.com/th?id=OIP.6X84iqLESOqLzxUIpPwPsAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            view: "1.2M",
            category : 'Sport'

        },
        {
            srNo: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPQHaD2aHMrvOsgf3B529QJHKjjeVY8HXYg&s',
            imgTitle: 'Performaring SQL INJECTION today',
            creatorName: 'Ronak Bhalala',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW1GlKu3d9RpRk7aLAQIosciuEB1CYaHJVQ&s',
            view: '1.2M',
            category : 'Education'
        },
        {
            srNo: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAx8TXX5E6rvhlyC6z5toqkXJKg95FGFhdw&s",
            imgTitle: "Lukas Graham - 7 Years [Official Music Video]",
            creatorName: "Lukas Graham",
            creatorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_1N1zKfARqOndLeJRRHEdEHaCLnZ2gXHVQ&s",
            view: "1.2M",
            category : 'Music'

        },
        {
            srNo: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqMsyrpXJ7wLOddQPg6didsdHe5vBvB9aYw&s',
            imgTitle: 'Android activity lifecycle full explaination',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxemQM32dozBjw4skkAE-yKI04QbefuA7miA&s',
            view: '1.2M',
            category : 'Education'
        },
        {
            srNo: 6,
            img: 'https://artoftesting.com/wp-content/uploads/2019/12/waterfall-model-featured.jpg',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://i.scdn.co/image/ab6765630000ba8aa3c190737fae79d732e1b588',
            view: '1.2M',
            category : 'Education'
        },
        {
            srNo: 7,
            img: 'https://i.ytimg.com/vi/AS8uKMWMyRc/mqdefault.jpg',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YdGNupCOO9-shGIrKRQ4xq8G2aHLxUa30w&s',
            view: '1.2M',
            category : 'Education'

        },
        {
            srNo: 8,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXcteYEfqEgEdeyGz23WjRe-pEw9NrCcJ6g&s',
            imgTitle: 'JDBC tutorial : #3',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://www.vhv.rs/dpng/d/459-4590307_png-file-svg-java-logo-black-and-white.png',
            view: '0',
            category : 'Education'
        },
        {
            srNo: 9,
            img: 'https://i.ytimg.com/vi/FfVWSvl1Bg4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzNP6xCmlaEGC2qhITR3PDNgPssw',
            imgTitle: 'Angular js tutorials : #1',
            creatorName: 'Chirag Pujara',
            creatorImg:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsFUkKtQDhOaNlzJTg-0eDunBBfu865jJgQ&s',
            view: '1.2M',
            category : 'Education'
        },
        {
            srNo: 10,
            img: "https://i.eurosport.com/2024/06/01/3980594-80787588-2560-1440.jpg",
            imgTitle: "Real Madrid 2-0 Borussia Dortmund - Champions League final",
            creatorName: "Champions League",
            creatorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oRaQ3kUXrW_hL3Hw0dul0BKITuWJ_GvMgA&s",
            view: "1.2M",
            category : 'Sport'

        },
        {
            srNo: 11,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCzO_TwB3Vhd2ai1Xson7tWKybKmvXrhkIA&s",
            imgTitle: "SAINt JHN - Roses (Imanbek Remix) (Official Music Video)",
            creatorName: "SAINt JHN",
            creatorImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq49b9Rlow0Y0uMke4vTexVWpueqHC00krw&s",
            view: "1.2M",
            category : 'Music'

        },
        {
            srNo: 12,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6glWFrIk77kyNpmz3WqHwkU3X8x9fNK1Sg&s",
            imgTitle: "Gautam gambhir vs Virat Kohli",
            creatorName: "Indian primer leauge",
            creatorImg: "https://th.bing.com/th?id=OIP.6X84iqLESOqLzxUIpPwPsAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            view: "1.2M",
            category : 'Sport'

        },
    ];

    imageData: any = [];
    channels: any = [];
    categories:any = [];
    visibleChannel: boolean = false;
    visibleCategory: boolean = false;

    ngOnInit() {
        this.imageData = this.uploads;
        this.channels = new Set(this.uploads.map((key) => key.creatorName));
        this.categories = new Set(this.uploads.map((key) => key.category));
    }
    handleChannel() {
        if (this.visibleChannel) {
            this.visibleChannel = false;
        } else {
            this.visibleChannel = true;
        }
    }
    handleCategory() {
        if (this.visibleCategory) {
            this.visibleCategory = false;
        } else {
            this.visibleCategory = true;
        }
    }
    showChannelContent(channelName: string) {
        // alert(channelName);
        this.imageData = this.uploads.filter(
            (e) => e.creatorName == channelName
        );
    }
    showCategoryContent(category: string) {
        // alert(channelName);
        this.imageData = this.uploads.filter(
            (e) => e.category == category
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
