let Remote = function (code) {
    this.code = code;

    this.changeChannel = function (tv, channel) {
        tv.changeChannel(channel);
    }
    this.changeVolume = function (tv, volume) {
        tv.changeVolume(volume);
    }
}
