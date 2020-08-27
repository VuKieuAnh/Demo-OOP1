let Tivi = function (channel, volume, status) {
    this.channel = channel;
    this.volume = volume;
    this.status = status;

    this.changeVolume = function (number) {
        this.volume = number
    }
    this.changeChannel = function (newChannel) {
        this.channel = newChannel;
    }
}
