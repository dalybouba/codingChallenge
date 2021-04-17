
import 'core-js/es7/reflect'
import 'core-js/client/shim'
import 'core-js/dist/zone'

import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';
import { PlatformRef } from '@angular/core';

platformBrowserDynamic().bootstrapModule().then(PlatformRef=>{
    const upgrade=PlatformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement,['app']);

}

)