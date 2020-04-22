export class Preventor {
    removeGuard(guard) {
        for (const element of guard) {
            element.remove();
        }

        document.querySelector('body').style.overflow = 'initial';
    }
}