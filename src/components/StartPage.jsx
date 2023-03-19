import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function StartPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(0)
  return (
    <div className='page'>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className='mainPage'>
        <div className='mainText'>
          <p className='mainHeader'>Paul Binyan</p>
          <p>Welcome to Paul Binyan, the perfect website for anyone looking to master their knowledge of Hebrew verb grammar!</p>
          <p>Our free and user-friendly platform offers a fun and engaging way to practice conjugation of verbs in Hebrew. Our interactive quiz format provides you with an infinitive and prompts you to select the correct translation and form of the definite tense, with given number and gender. With four options to choose from, you'll have the opportunity to test your knowledge and improve your understanding of this important aspect of Hebrew grammar.</p>
          <p>At Paul Binyan, we believe in providing our users with the flexibility to tailor their learning experience to their specific needs. You can choose which Binyans and tenses you want to practice, allowing you to focus on the areas where you need the most help. And if you need a little extra guidance, our short grammar reference tables provide you with patterns for different tenses.</p>
          <p>Registration is not necessary, but if you choose to log in, you can keep track of your progress and see your statistics. Please note that our website contains only basic verbs as our aim is not to enlarge your vocabulary but rather to provide a tool for practicing a specific grammar topic.</p>
          <p>So whether you're a student learning Hebrew or just someone looking to brush up on your verb conjugation skills, Paul Binyan is the perfect resource for you. Start practicing now and watch your understanding of Hebrew verb grammar improve!</p>
        </div>
      </div>
      <div className='footer'>
        <p>footer</p>
      </div>
    </div>
  )
}

export default StartPage;
