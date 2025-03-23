import React from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './apollo/apolloClient';
import './App.css';
import LanguageSwitcher from "./components/LanguageSwitcher";
import CharacterList from "./components/CharacterList";


function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <LanguageSwitcher/>
                <CharacterList/>
            </div>
        </ApolloProvider>
    );
}

export default App;