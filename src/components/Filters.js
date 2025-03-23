import React from 'react';
import {useTranslation} from "react-i18next";

function Filters({filters, onFilterChange}) {
    const {t} = useTranslation();

    return (
        <div className="filters">
            <label htmlFor="species">{t('filters.species')}: </label>
            <input
                type="text"
                id="species"
                name="species"
                value={filters.species}
                onChange={onFilterChange}
                placeholder="Filter by species"
                style={{ marginRight: '20px' }}
            />
            
            <label htmlFor="status">{t('filters.status')}:</label>
            <input
                type="text"
                id="status"
                name="status"
                value={filters.status}
                onChange={onFilterChange}
                placeholder="Filter by status"
            />
        </div>
    );
}

export default Filters;