import { CustomElement, Prop, html } from 'ce-decorators';

export class TestComponent extends CustomElement {

    @Prop()
    test:string = '';
    render() {
        return html`test`;
    }
}