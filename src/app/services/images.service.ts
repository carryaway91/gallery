export class ImagesService {
    images: {path: string; id: number}[] = [
        { path: '../../assets/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg', id: 1 },
        { path: '../../assets/gettyimages-1146431497.jpg', id: 2 },
        { path: '../../assets/GettyImages-938716222-b4386e5.jpg', id: 3 },
        { path: '../../assets/Shaqi_jrvej.jpg', id: 4 },
        { path: '../../assets/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg', id: 5 }
    ];

    getImages() {
        return this.images.slice();
    }
}