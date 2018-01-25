class BirdWhisperer {
    chirping: string;
    constructor(message: string) {
        this.chirping = message;
    }
    chirp() {
        return 'Ah~ oh~ !asdas ' + this.chirping;
    }
}
let birdWhisperer = new BirdWhisperer('coo-coo-coo...');
document.body.innerHTML = birdWhisperer.chirp();
