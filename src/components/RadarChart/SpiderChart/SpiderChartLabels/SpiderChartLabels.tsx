import classNames from 'classnames';
import React from 'react';

const spiderLabels = [
    { label: 'Biodiversity', class: 'top-0 left-1/2 transform -translate-x-1/2' },
    {
        label: 'Climate change',
        class: 'top-1/4 right-1 transform -translate-y-1/2 ml-auto mr-0 flex justify-end',
    },
    {
        label: 'Gender equality',
        class: 'top-3/4 right-1 transform -translate-y-1/2 flex justify-end',
    },
    { label: 'Human rights', class: 'bottom-0 left-1/2 transform -translate-x-1/2 w-auto' },
    { label: 'Conflict & war', class: 'top-3/4 left-0 transform -translate-y-1/2' },
    { label: 'Health & wellbeing', class: 'top-1/4 left-0 transform -translate-y-1/2' },
];

export const SpiderChartLabels = () => {
    return (
        <>
            {spiderLabels.map((label) => {
                return (
                    <div key={label.label} className={`absolute ${label.class} text-sm`}>
                        <div className={classNames({ 'w-min': label.label !== 'Human rights' })}>
                            {label.label}
                        </div>
                    </div>
                );
            })}
        </>
    );
};
