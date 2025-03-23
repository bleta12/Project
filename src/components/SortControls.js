import React from 'react';
import {useTranslation} from "react-i18next";

function SortControls({sortBy, onSortChange}) {
    const {t} = useTranslation();
    return (
        <div className="sort-controls" style={{ marginBottom:"30px" }}>
            <label htmlFor="sort">{
                t('sortControls.sortBy')
            }:</label>
            <select id="sort" value={sortBy} onChange={onSortChange}>
                <option value="">None</option>
                <option value="name">{   t('sortControls.name')}</option>
                <option value="origin">{   t('sortControls.origin')}</option>
            </select>
        </div>
    );
}

export default SortControls;