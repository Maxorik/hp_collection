import React, { FC } from "react";

interface ProgressMeterProps {
    title: string;
    value: number;
    total: number;
    color?: 'default' | 'green' | 'red' | 'blue' | 'yellow';
}

export const ProgressBar: FC<ProgressMeterProps> = ({ title, value, total, color='default' }) => {
    const percent: number = Math.min((value / total) * 100, 100);

    return (
        <div className="progress-meter">
            <div className="progress-meter__header">
                <span className="progress-meter__title">{title}</span>
                <span className="progress-meter__percent">{Math.round(percent)}%</span>
            </div>
            <meter
                value={value}
                min={0}
                max={total}
                className={ `progress-meter__bar bar-${color}` }
            />
            <div className="progress-meter__footer">
                <span>{value}</span>
                <span>/</span>
                <span>{total}</span>
            </div>
        </div>
    );
}