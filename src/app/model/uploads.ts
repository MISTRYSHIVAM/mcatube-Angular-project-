export class Uploads {
    imgNo: number;
    img: string;
    imgTitle: string;
    creatorImg: string;
    creatorName: string;
    view: string;

    constructor(
        imgNo: number,
        img: string,
        imgTitle: string,
        creatorImg: string,
        creatorName: string,
        view: string
    ) {
        this.imgNo = imgNo;
        this.img = img;
        this.imgTitle = imgTitle;
        this.creatorImg = creatorImg;
        this.creatorName = creatorName;
        this.view = view;
    }
}
