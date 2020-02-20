import FullIcon from './assets/sizes/full.svg';
import MobileIcon from './assets/sizes/mobile.svg';
import MonitorIcon from './assets/sizes/monitor.svg';
import TabletIcon from './assets/sizes/tablet.svg';

export const SCREEN_SIZES = {
  small: { size: '360px', icon: MobileIcon },
  medium: { size: '640px', icon: TabletIcon },
  big: { size: '870px', icon: MonitorIcon },
  full: { size: 'calc(100% - 160px)', icon: FullIcon },
};

export const HEADER_HEIGHT = 90;