import { Inspector } from './inspector.js';
import { Preventor } from './preventor.js';

export function main() {
    const inspector = new Inspector();
    const guard = inspector.getGuard();
    if (guard) {
        const preventor = new Preventor();
        preventor.removeGuard(guard);

        console.info(`Chrome Extension: Totalcar Adblock Guard Preventor has been activated.`);
    }
}