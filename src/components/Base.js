export class BaseComponent {
    constructor() {
        const tmp = document.createElement('template');
        tmp.innerHTML = this.constructor.template;
        return tmp.content;
    }
}
