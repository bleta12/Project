import {useQuery} from '@apollo/client';
import {GET_CHARACTERS} from '../queries/characters';

export const useCharacters = (page, filters, onError) => {
    const {loading, error, data} = useQuery(GET_CHARACTERS, {
        variables: {page, filter: filters},
        onError: (error) => onError(error),
    });

    return {
        loading,
        error,
        characters: data?.characters?.results || [],
        totalPages: data?.characters?.info?.pages || 1,
    };
};