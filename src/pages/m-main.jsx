import React, { useEffect, useState } from 'react';
import DWorkshopPage from './d-workshop/d-workshop';
import MDashboard from './m-dashboard/m-dashboard';
import MDashboardNavbar from './m-dashboard/m-dashboard-navbar';
import './m-style.css';

const MMain = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <span className="m-main">
      <MDashboardNavbar />
      {isMobile ? (
        <div>
          <MDashboard />
        </div>
      ) : (
        <div>
          <DWorkshopPage />
        </div>
      )}
    </span>
  );
};

export default MMain;
