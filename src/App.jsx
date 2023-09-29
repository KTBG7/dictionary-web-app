import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { QueryClient,  QueryClientProvider} from '@tanstack/react-query';
import SearchContainer from './components/SearchContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="bg-light dark:bg-dark min-h-screen flex flex-col items-center mx-auto px-6 pt-6 md:px-20 md:pt-5 lg:px-40 lg:pt-10">
        <Navbar />
        <SearchContainer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
