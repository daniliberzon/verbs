import { Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Navigation from './Navigation';
import grammarImg from '../img/future-hifil-ayn-iud.svg';
import quizExample from '../assets/quiz_example.jpeg';

function StartPage() {
  return (
    <div className='page'>
      <Navigation />
      <section className='mainPage'>
        <section className='mainText'>
          <Heading size='xl'>Paul Binyan</Heading>
          <p mb={2}>Welcome to Paul Binyan, the perfect website for anyone looking to master their knowledge of Hebrew verb grammar!</p>
          <section>
            <Heading as='h2' size='lg' mt={2}>Main features</Heading>
            <p>This free and user-friendly platform offers a fun and engaging way to practice conjugating Hebrew verbs. The interactive quiz format provides you with an infinitive and prompts you to select the correct translation and form of the definite tense, with given number and gender. With four options to choose from, you'll have the opportunity to test your knowledge and improve your understanding of this important aspect of Hebrew grammar.</p>
            <p>At Paul Binyan, we believe in providing our users with the flexibility to tailor their learning experience to their specific needs. You can choose which Binyans and tenses you want to practice, allowing you to focus on the areas where you need the most help. And if you need a little extra guidance, our short grammar reference tables provide you with patterns for different tenses.</p>
          </section>
          <section>
            <Heading as='h2' size='lg' mt={2}>For registered users</Heading>
            <p>Registration is not necessary, but if you choose to log in, you can keep track of your progress and see your statistics. Please note that our website contains only basic verbs as our aim is not to enlarge your vocabulary but rather to provide a tool for practicing a specific grammar topic.</p>
          </section>
          <p>So whether you're a student learning Hebrew or just someone looking to brush up on your verb conjugation skills, Paul Binyan is the perfect resource for you. Start practicing now and watch your understanding of Hebrew verb grammar improve!</p>
        </section>

        <section className='mainText features'>
          <article className='featureArticle'>
            <Heading as="h2" size='lg' mb={2}>
              Quiz
            </Heading>
            <Text mb={2}><em>Test your skills!</em></Text>
            <Image w="90%" src={quizExample} alt="image" />
          </article>
          <article className='featureArticle'>
            <Heading as="h2" size='lg' mb={2}>
              Grammar
            </Heading>
            <Text mb={5}><em>Enhance your grammar knowledge!</em></Text>
            <Image w="90%" src={grammarImg} alt="image" pos="relative" bottom="-2em" />
          </article>
        </section>

      </section>


      <div className='footer'>
        <p>Created by Olga Liberzon </p>
        <a className="linkImg" href="https://www.linkedin.com/in/liberzon-olga/" target="_blank"><img className="LinkedinLogo" src={require('../assets/LI-In-Bug.png')}/></a>
        <p> & Daniil Liberzon </p>
        <a className="linkImg" href="https://www.linkedin.com/in/dani-liberzon/" target="_blank"><img className="LinkedinLogo" src={require('../assets/LI-In-Bug.png')}/></a>
      </div>
    </div>
  )
}

export default StartPage;
