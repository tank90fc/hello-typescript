class BirdWhisperer {
    constructor(message) {
        this.chirping = message;
    }
    chirp() {
        return 'Ah~ oh~ !asdas ' + this.chirping;
    }
}
let birdWhisperer = new BirdWhisperer('coo-coo-coo...');
document.body.innerHTML = birdWhisperer.chirp();
//# sourceMappingURL=hello-typescript.js.map