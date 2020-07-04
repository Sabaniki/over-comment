import {nicoJS} from './nico.js'

const db = firebase.firestore();

let nico = new nicoJS({
    app: document.getElementById('app'),
    width: screen.width,
    height: screen.height,
    font_size: 50,     // opt
    color: '#fff'  // opt
});

nico.listen();

db.collection("comments").onSnapshot((snapshot => {
    snapshot.docChanges().forEach(change => nico.send(change.doc.data().text))
}));
