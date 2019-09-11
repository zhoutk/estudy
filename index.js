var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.load('./test.mp3')

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

wavesurfer.on('finish', function () {
    wavesurfer.play();
});

function pauseAndPlay() {
    wavesurfer.playPause()
}