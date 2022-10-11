import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto bg-slate-300 p-3 my-5'>
           <h1 className='text-3xl m-3'>Blog Page</h1>
           <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       What is the purpose of React Router?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       React Router provides us a way to create a single page application with multiple link. The main benefit of using react router is that if we go to different route or link it won't refresh the whole page. So it will enhance user experience more.React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application. The most version the react router is version 6. React Router is essential for displaying different views in a single page application. Multiple views in React apps are not possible without React Router.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       How does ContextAPI works?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        We all know that if we want to access data or state from one component to another component we have to do with props drills meaning that we have to pass the props to child then to its child and so on. But after the introduction of the Context API the works gets much easier now. By the using of Context API data or state will be like Global variable and we can access it from and component we want. Context API makes  state management easier than ever.  
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What is UseRef?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        useRef is a hook provided by react. It allows to access Dom elements. Basically it gives us mutable object. The returned object will persist for the full lifetime of the component. The useRef Hook also allows us to save values between renderings. It can be used to hold a mutable value that does not require a re-render every time it is altered.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>    


           
        </div>
    );
};

export default Blog;