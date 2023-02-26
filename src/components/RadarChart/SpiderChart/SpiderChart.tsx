import React, { useEffect } from 'react';

import { plotSpiderChart } from './helpers/plotSpiderChart';
import { SpiderChartLabels } from './SpiderChartLabels/SpiderChartLabels';

export const SpiderChart = () => {
    useEffect(() => {
        plotSpiderChart();

        window.addEventListener('resize', plotSpiderChart);
        return () => {
            window.removeEventListener('resize', plotSpiderChart);
        };
    }, []);

    return (
        <div className="relative">
            <div className="w-60 xs:w-80 h-60 xs:h-80 block m-auto" id="spider" />
        </div>
    );
};
