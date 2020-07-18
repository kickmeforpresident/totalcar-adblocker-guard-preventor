export class Preventor {
    removeGuard(guard) {
        guard.remove();
        
        setTimeout(() => {
            document.querySelector('body').style.overflow = 'initial';
        }, 2000);
    }
}