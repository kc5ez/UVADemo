class CageApi {
    constructor() {
        this.cages = ["http://assets.uvamagazine.org/images/uploads/2013/DeanGrovesWorldRecord/MoreHighFives.jpg", 
            "https://aiasatuva.files.wordpress.com/2014/01/humpback2.jpg",
            "https://scontent-lax3-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/10502049_10152891032437068_8151873515752733152_n.jpg?oh=340d7c5637de2b21d260eb63e2aafbee&oe=572E7393", 
            "https://i.ytimg.com/vi/woCzT0Pxy8Y/hqdefault.jpg", 
            "http://www.hercampus.com/sites/default/files/2013/04/25/Foxfield.jpg"];
        this.colors = ['orange', 'orange', 'orange', 'orange', 'orange']
        this.words = ["High-five Dean Groves", "Sunrise from Humpback Rock", "Take a picture with Cav Man", "See the Lighting of the Lawn", "Appreciate a Horse at Foxfield"];
        this.i = 0;
        this.rejectedPile = [];
        this.acceptedPile = [];
    }

    goToNext() {
        let index = this.i++;
            return {
                cage: this.cages[index % this.cages.length],
                color: this.colors[index % this.colors.length],
                quote: this.words[index % this.words.length], 
                index: index,
                rejected: this.rejectedPile,
                accepted: this.acceptedPile
            }
    }

    onReject(data) {
       var rejectedObject = [{quote: data.quote, pic: data.cage}];
       this.rejectedPile.push(rejectedObject);
       console.log(this.rejectedPile);
    }

    onAccept(data) {
        var acceptedObject = [{quote:data.quote, pic: data.cage}];
        this.acceptedPile.push(acceptedObject);
        console.log(this.acceptedPile);
    }
}

export default CageApi;