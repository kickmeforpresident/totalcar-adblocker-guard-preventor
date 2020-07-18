export class Inspector {
    getGuard() {
        const sections = document.querySelectorAll('body section');
        return sections[sections.length - 1];
    }
}