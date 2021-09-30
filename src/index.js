import 'purecss/build/pure-min.css';
import { Contacts } from './components/Contacts';
import { Header } from './components/Header';
import './styles.css';

if (module) {
    module.hot.accept(() => {
        window.location.reload();
    });
}

class App {
    constructor() {
        const container = document.createElement('div');
        container.classList.add('container', 'vcard');
        document.querySelector('body').prepend(container);
        container.appendChild(new Header());
        container.appendChild(new Contacts());
    }
}

new App();
