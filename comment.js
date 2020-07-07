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

nico.listen();
db.collection(new Date().toDateString()).onSnapshot((snapshot => {
    snapshot.docChanges().forEach(change => {
        commentQueue.push(change.doc.data().text);
    })
}));

setInterval(() => {
    let comment = commentQueue.shift()
    if(comment === '88888888') new Audio("assets/crap_se.wav").play();
    nico.send(comment)
}, 1000);
