import getDevice from '../_helpers/screen';
import { useState, useEffect } from 'react';

export const useResponsiveDevice = () => {
  const [device, setDevice] = useState<string>(getDevice());

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    const handleWindowSizeChange = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const d = getDevice();
        if (d && d != device) {
          setDevice(d);
        }
      }, 50);
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [device]);

  return device;
};
