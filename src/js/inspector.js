export class Inspector {
    getGuard() {
        return document.getElementsByClassName('adbd-layer show-element');
    }

    guardIsActive(guard) {        
        if (guard.length > 0) { 
            return true;
        }

        return false;
    }
}