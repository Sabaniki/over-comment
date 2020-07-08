import {nicoJS} from './nico.js'

const db = firebase.firestore();

let nico = new nicoJS({
    app: document.getElementById('app'),
    width: screen.width,
    height: screen.height,
    font_size: 32,     // opt
    color: '#fff'  // opt
});

const commentQueue = [];


let se = new Audio("assets/crap_se.wav");
se.volume = 0.05;

nico.listen();
db.collection(new Date().toDateString()).onSnapshot((snapshot => {
    snapshot.docChanges().forEach(change => {
        commentQueue.push(change.doc.data());
    })
}));

addEventListener("keydown", event=>{
    if (event.keyCode === 38 && se.volume < 0.9) se.volume += 0.05;
    else if (event.keyCode === 40 && 0.05 <= se.volume) se.volume -= 0.05;
});

setInterval(() => {
    let comment = commentQueue.shift();
    if (comment.text === '88888888') se.play();
    nico.send(comment.text, comment.color, comment.size);
}, 1000);
