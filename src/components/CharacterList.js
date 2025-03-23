import {useTranslation} from "react-i18next";
import React, {useCallback, useEffect, useState} from "react";
import {useErrorHandler} from "../hooks/useErrorHandler";
import {useCharacters} from "../hooks/useCharacters";
import Filters from "./Filters";
import SortControls from "./SortControls";
import CharacterCards from "./CharactersCards";
import ErrorModal from "./ErrorModal";

function CharacterList() {
    const {t} = useTranslation();
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const [filters, setFilters] = useState({
        species: '',
        status: '',
    });
    const [allCharacters, setAllCharacters] = useState([]);

    const {error, handleError, clearError} = useErrorHandler();
    const {loading, characters} = useCharacters(page, filters, handleError);


    useEffect(() => {
        if (characters.length > 0) {
            setAllCharacters((prev) => [...prev, ...characters]);
        }
    }, [characters]);

    const sortedCharacters = [...allCharacters].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'origin') {
            return a.origin.name.localeCompare(b.origin.name);
        } else {
            return 0;
        }
    });

    const handleFilterChange = (event) => {
        const {name, value} = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
        setPage(1);
        setAllCharacters([]);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const loadMoreCharacters = useCallback(() => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                loadMoreCharacters();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreCharacters]);

    return (

        <div>
            <h1>{t('appTitle')}</h1>
            <Filters filters={filters} onFilterChange={handleFilterChange}/>
            <SortControls sortBy={sortBy} onSortChange={handleSortChange}/>
            <CharacterCards characters={sortedCharacters} loading={loading}/>
            <ErrorModal error={error} onClose={clearError}/>
        </div>
        
    );
}

export default CharacterList;