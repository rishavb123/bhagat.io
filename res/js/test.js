// var canvas2 = document.querySelector('canvas');
// var stream = canvas2.captureStream(25);
// var recorder = new MediaRecorder(stream, {
//     mimeType: 'video/webm; codecs=vp9'
// });
// recorder.start();
// recorder.ondataavailable = e => {
//     var a = document.createElement('a');
//     a.download = ['video_', (new Date() + '').slice(4, 28), '.webm'].join('');
//     a.href = URL.createObjectURL(e.data);
//     a.textContent = a.download;
//     document.getElementById("karate").appendChild(a);
// };

// setTimeout(() => {recorder.stop()
// console.log("done");
// }, 131000);