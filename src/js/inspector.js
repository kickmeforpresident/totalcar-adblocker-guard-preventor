export class Inspector {
    getGuard() {
        const divs = document.querySelectorAll('body > div');

        for (let i = 0; i < divs.length; i++) {
            if (divs[i].querySelector("img[src='https://totalcar.hu/assets/images/common/adblock/totalcar/modal.jpg']") !== null) {
                return divs[i];
            }
        }

        return null;
    }
}