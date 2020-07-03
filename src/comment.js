import {nicoJS} from './nico.js'


let nico = new nicoJS({
    app: document.getElementById('app'),
    width: screen.width,
    height: screen.height,
    font_size: 50,     // opt
    color: '#fff'  // opt
});

nico.listen();

let comments = ["test", "hoge", "fuga", "foo", "bar"];

comments.forEach(comment => nico.send(comment));

