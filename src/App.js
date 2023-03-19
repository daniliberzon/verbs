import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grammar from './components/grammar/Grammar';
import QuizSettings from './components/QuizSettings';
import StartPage from './components/StartPage';
import { ChakraProvider } from '@chakra-ui/react';
import Account from './components/Account';
import SignIn from './components/SignIn';

function App() {
  return(
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="quiz" element={<QuizSettings />} />
        <Route path="account" element={<Account />} />
        <Route path="grammar" element={<Grammar />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App;