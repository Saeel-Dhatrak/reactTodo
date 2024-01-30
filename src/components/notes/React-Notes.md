## Lecture 182/9:07 - Exploring important nodejs commands - Create React App

- npm start: Runs the app in development mode
    - Recommendation: Use Google Chrome
- npm test: Run unit tests
- npm run build: Build a production deployable unit
    - Minified
    - Optimized for performance
- npm install --save react-router-dom: Add a dependency to your project


## Lecture 183/9:08 - Exploring Visual Studio Code and Create React App

- Toggle Explorer: ctrl+B or cmd+B
- Toggle Explorer
    - Ctrl + B or Cmd + B
- Explore Left Hand Side Bar
    - Search etc
- Make a change to index.html
    - Change Title
- Make a change to App.js
    - Remove everything in App div
    - Add My Todo Application
- How is the magic happening?
    - Create React App
    - Automatically builds and renders in the browser

## Lecture 184/9:09 - Exploring Create React App Folder Structure

- Goal: Get a 10,000 feet overview of folder structure
- README.md: Documentation
- package.json: Define dependencies (similar to Maven pom.xml)
- node_modules: Folder where all the dependencies are downloaded to
- **React Initialization**
    - public/index.html: Contains root div
    - src/index.js: Initializes React App. Loads App component.
        - src/index.css - Styling for entire application
    - src/App.js: Code for App component
        - src/App.css - Styling for App component
        - src/App.test.js-Unit tests for App component
            - Unit test is written along side production code (Different to Java approach)
- Remember: Syntax might look little complex
    - Different from typical Java code (imports, ...)


## Lecture 185/9:10 - Getting started with React ComponentS

- Why do we need React Components?
- Web applications have complex structure
    - Menu, Header, Footer, Welcome Page, Login Page, Logout Page, Todo Page etc
- Components help you modularize React apps
    - Create separate components for each page element
        - Menu Component
        - Header Component
        - Footer Component
        - .....
    - Why?
        - Modularization
        - Reuse
- Understanding React Components
- First component typically loaded in React is
    - Apps: App Component
- Parts of a Component
    - View (JSX or JavaScript)
    - Logic (JavaScript)
    - Styling (CSS)
    - State (Internal Data Store)
    - Props (Pass Data)
- (Remember) React component names must always start with a capital letter

## Lecture 186/9:11 - Creating Your First React Component and more

- The app.js file contains the actual content which is getting loaded into our page. All the components that we will be creating will be the child components of the AppComponent present in here.
- Currently our app.js looks as shown below.
- ```js
    import './App.css';

    function App() {
    return (
        <div className="App">
        My Todo Application
        </div>
    );
    }

    export default App;
  ```
- Let's write the code for our first react component just below the App() function ends. Typically whenever we want to return something from our component we would put it into parenthesis () and that's why after the *return* in the above code we have opened the parenthesis.
- So within the parenthesis we would define what we want to return back from a component. Whatever you return back is shown as the part of that specific component. So our new *FirstComponent* can be created as shown below.
- ```js
    import './App.css';

    function App() {
    return (
        <div className="App">
        My Todo Application
        </div>
    );
    }
    function FirstComponent(){
        return (
            <div class="FirstComponent">
                <h4>First Component</h4>
            </div>
        )
    }

    export default App;
  ```
- Now we have created our new component but this won't be visible in our page because it should be included in the hierarchy of the AppComponent. So the App Component will have a FirstComponet tag inside its return statement as shown below.
- ```js
     function App() {
    return (
        <div className="App">
        My Todo Application
        <FirstComponent></FirstComponent>
        </div>
    );
    }
  ```
- Similarly we can have a SecondComponent. We are making use of functions as the component and that's the reason why these things are called *Function Components*
- In react there are class components as well, an example of class component is shown below
- ```js
    import { Component } from 'react';
    class ThirdComponent extends Component{
        render(){
            return (
            <div class="ThirdComponent">Third Component</div>
            )
        }
    }
  ```
- In the class component we have to make use of *render* function and inside that function we can write the return statement. Also the class components needs to extend the Component which is imported from react library.

## Lecture 187/9:12 - Getting started with State in React- useState hook

- We will start with writing the code in one module that is in the App.js
- When should you use a function component and when should you use the class component?
- Understanding State in React
    - Each of the component that we build in react can have *State*
    - **State** - Built-in React object used to contain data information about the component
    - **(Remember)** In earlier versions of React, ONLY class Components can have state
        - AND implementing state was very complex!
    - **Hooks were introduced in React 16.8**
        - Hooks are very easy to use
        - **useState** hook allows adding state to Function Components
    - So whenever you are using a React version greater than 16.8 then everytime you will use the function component.

## Lecture 188/9:13 - Exploring JSX - React Views

- So the question number 2 i.e why are we using the parenthesis after the return statement in the below code?
- ```js
    function FirstComponent(){
        return (  // here why are we using the parenthesis?
            <div class="FirstComponent">
                <h4>First Component</h4>
            </div>
        )
    }
  ```
- React Projects use JSX for presenetation (*JSX- Javascript xml*)
- **Stricter than HTML**
    - Close tags are mandatory
    - **Only one top level tag allowed:**
        - Cannot return multiple top-level JSX tags
        - Wrap into a shared parent  
            - ```js
                class FourthComponent extends Component {
                    render(){
                        return(
                            <div>    // So this parent tags is necessary
                                <div class="FourthComponent">Fourth Component</div>
                                <div class="FourthComponent">Fourth Component</div>
                                // so if we keep only the above two div tags and not the parent div for these both div's then it will throw error and will demand for a parent div tag
                                // Because these are two separate tags and it is not allowed as part of component view
                            </div>
                        )
                        }
                }
              ```
            - Adjacent JSX elements must be wrapped in an enclosing tag.
            - You should have a closing div tag, if you have a opening div tag.
            - So the above can also be done using empty wrapper i.e removing div
            - ```js
                class FourthComponent extends Component {
                    render(){
                        return(
                            <>    // So this empty wrapper as a parent will also work
                                <div class="FourthComponent">Fourth Component</div>
                                <div class="FourthComponent">Fourth Component</div>                
                            </>
                        )
                        }
                }
              ```
- **How is JSX enabled in a React Project?**
    - Different browsers have different levels of support for modern JS features (ES2015,...,ES2022,..)
    -   - How to ensure backward compatability for your JS code?
        - Solution: Babel
        - Babel converts JSX to JS
        - So whatever code you write in jsx it will be converted into browser compatible javascript
    - Let's Play with Babel and JSX
        - Let's try Babel: https://babeljs.io/repl
    - wrapping the code in *Parenthesis ()* makes returning complex JSX values easier, because if we remove the parenthesis then the line which is adjacent to *return* statement will only get executed and the other which are written below the return statement will not be considered.
    - Custom Components should start with upper case letter
        - For HTML you should use small case
    - Specify CSS class - className
    - We have used **className** when we created a component in the div tag. If it was plain HTML then we would have written **class** only
    - ```html
        <div className="FirstComponent"></div>  <!-- This is JSX format->
        <div class="FirstComponent"></div>  <!-- This is HTML format->
      ```
        
## Lecture 189/09:14 -Following Javascript best practices - Refactoring to Modules

- 1: Each component in its **own file (or module)**
    - src\components\learning-examples\FirstComponent.jsx
    - We have created a new react component in the newly created folder *learning-examples* as the *FirstComponent.jsx* and we have cut pasted the FirstComponent function from App.js to FirstComponent.jsx
    - ```js
        // FirstComponent.jsx
        function FirstComponent(){
        return (
            <div class="FirstComponent">
                <h4>First Component</h4>
            </div>
        )
        }
      ```
    - upon running the application we will get an error saying *FirstComponent is defined but never used*
    - So we need to make an import in the App.js to make use of FirstComponent.
        - *import FirstComponent from './components/learning-examples/FirstComponent'*
    - Even after importing we will get an error saying- *export 'default' (imported as 'FirstComponent') was not found in './components/learning-examples/FirstComponent'*
    - What it is saying that we are not exporting out *FirstComponent*. The way we can export out is 
    - ````js
        export default function FirstComponent(){
            return ( 
                <div class="FirstComponent">
                    <h4>First Component</h4>
                </div>
            )
        }
      ```
    - Similar can be done for the SecondComponent. In case of ThirdComponent and the FourthComponent we have to write an extra import statement because these two components are class components and they both extends component
        - ```js
            import { Component } from "react"

            export default class ThirdComponent extends Component {
                render(){
                return(
                    <div class="ThirdComponent">Third Component</div>
                )
                }
            }
          ```
    - *import { Component } from "react"* in this statement we are making use of braces {} while importing Component. In case of *import FirstComponent from './components/leraning-examples/FirstComponent'* we are not making use of braces {} while importing FirstComponent. WHY?
    - So let's say we have created a new Component named as *FifthComponent* in the FirstComponent itself as shown below and imported it in the App.js
    - ```js 
        export default function FirstComponent(){
        return (
            <div class="FirstComponent">
                <h4>First Component</h4>
            </div>
        )
        }

        // this is the new created component inside the FirstComponent
        export default function FifthComponent(){
            return (
                <div class="FifthComponent">
                    <h4>Fifth Component</h4>
                </div>
            )
        }
      ```
    - We have two default components in the *FirstComponent* and this will give error because a component can only have one default export. So we need to remove the word default from the FifthComponent i.e. *export function FifthComponent(){ ...}*
    - Now we can make an import of it in the App.js *import FifthComponent from './components/leraning-examples/FirstComponent'*.
    - But by not making use of {} braces while importing the FifthComponent we will only get whatever is written in the default component i.e. in this case we will get contents written in the *FirstComponent* and NOT from *FifthComponent*
    - So to get what is written in the FifthComponent we need to make use of {} braces while importing it and now the import statement will look as shown below.
        - *import {FifthComponent} from './components/leraning-examples/FirstComponent'*
    - So to make use of the components which are written inside some parent component and which are not the default ones we need to make use of braces {}
- Now we can see that App.js is very crowded with imports. So let's create a LearningComponent and make every component to get imported in it and then export the LearningComponent and then import LearningComponent in the App.js as shown below.
- ```js
    // LearningComponent
    import FirstComponent from "./FirstComponent";
    import SecondComponent from "./SecondComponent";
    import ThirdComponent from "./ThirdComponent";
    import FourthComponent from "./FourthComponent";
    import { FifthComponent } from "./FirstComponent";

    export default function LearningComponent() {
        return (
        <div className="LearningComponent">
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent/>
            <FourthComponent/>
            <FifthComponent />
        </div>
        );
    }

    // App.js
    import './App.css';
    import LearningComponent from './components/leraning-examples/LearningComponent';

    function App() {
    return (
        <div className="App">
        <LearningComponent />
        </div>
    );
    }
    export default App;
  ```
- Now we can see that App.js looks more clean.

## Lecture 190/09:15 - Exploring JavaScript further

- let's create a new Component -> LearningJavascript.jsx.
- ```js
    const person = {
        name: 'Saeel Dhatrak',
        address: {
            line1: 'Balaji chowk Pashan',
            city: 'Pune',
            country: 'India',
        },
        profiles: ['twitter', 'instagram', 'linkedin'],
        printProfile: () => {
            person.profiles.map(
                profile => console.log(profile)         
            )
        }
    }

    export default function LearningJavascript() {
        return(
            <>
                <div>{person.name}</div>
                <div>{person.address.line1}</div>
                <div>{person.printProfile()}</div>
            </>
        )
    }
  ```
- Add the import to the LearningComponent.JSX and all the things will work in the App.js

# 10 - Exploring React Components with Counter Example

## Lecture 191/ 10:01 - Exploring React Components with Counter Example

- Parts of a Component
    - View (JSX or Javascript)
    - Logic (Javascript)
    - Styling (CSS)
    - State (Internal Data Store)
    - Props (Pass Data)
- Let's learn more about each of these building in another simple example
    - A counter App

## Lecture 192/ 10:02 -  Getting Started with React Application - Counter

- Let's add our components in our application's *components/counter* folder with name Counter.jsx
- ```js
    export default function Counter(){

        function incrementCounterFunction(){
            console.log('increment clicked')
        }

        return (
            <div className="Counter">
                <span className="count">0</span>
                <div>
                    <button className="counterButton" onClick={incrementCounterFunction}>+1</button>
                </div>
            </div>

        )
    }
  ```
- here in the above button we have used the onClick in which we are calling the function incrementCounterFunction inside the curly braces without using the parenthesis ().
- So it is the syntax of the jsx for *onClick* in which we need to write the name of the function inside the braces {} which are gonna get called upon clicking of that particular button.

## Lecture 192/10:03 - Getting Started with React Application - Counter - 2

- Options of styling your react components
    - 1: style
        - Error: button style={border-radius:30px}
        - Correct Syntax: button style={{border-radius:"30px"}}
        - Another way is to write the styling in the javascript format in a constant variable and then used that variable in the style section which braces as shown below.
        - ```js
            export default function Counter(){

                const buttonStyle = {
                    fontSize:"16px",
                    backgroundColor: "#00a5ab",
                    width: "100px",
                    margin: "10px",
                    color: "white",
                    padding: "15px",
                    borderRadius: "30px"
                };

                function incrementCounterFunction(){
                    console.log('increment clicked')
                }

                return (
                    <div className="Counter">
                        <span className="count">0</span>
                        <div>
                            <button className="counterButton" 
                                    onClick={incrementCounterFunction}
                                    style = {buttonStyle}
                            >+1</button>
                        </div>
                    </div>
                )
            }
          ```
        - In the above code we can see that the styling property are not separated by hyphen rather they are in the camelcasing format because we are writing styling in the javascript itself.
        - Also if we had not written the button style separately then in the style tag itself we would had to make use of two curly braces and the hyphen in the styling property
        - ```js
            // it would have look something like this
            <button className="counterButton" 
                    onClick={incrementCounterFunction}
                    style = {{background-color: "white"}}
            >+1</button>
          ```
    - 2: className
        - Define the css Class in your component's CSS file
        - But now as we can see the jsx file is crowded, so let's create a Counter.css file in the same counter folder and shift this css code over there and make a import of this css file in jsx file
        - ```js
            // This is Counter.css
            .counterButton{
                    font-size: 16px;
                    background-color: #00a5ab;
                    width: 100px;
                    margin: 10px;
                    color: white;
                    padding: 15px;
                    border-radius: 30px;
                    border-color: black;
                    border-width: 5px;
                }

                .count{
                    font-size: 150px;
                    padding: 20px;
                }
            // This is Counter.jsx
            import './Counter.css'
            export default function Counter(){

                function incrementCounterFunction(){
                    console.log('increment clicked')
                }

                return (
                    <div className="Counter">
                        <span className="count">0</span>
                        <div>
                            <button className="counterButton" 
                                    onClick={incrementCounterFunction}
                            >+1</button>
                        </div>
                    </div>
                )
            }
          ```

## Lecture 194/10:04 - Exploring React State with useState hook - Adding State to counter

- **State** - Built-in react object used to contain data or information about the component
- In earlier version of react ONLY class components can have state and implementing state was very complex
- **Hooks** were introduced in React 16.8
    - Hooks are very easy to use
    - **useState** hook - allows adding state to *Function Component*
        - **useState** - returns two things
            - 1: current State
            - 2: A function to update state
    - Each instance of component has it's own state
    - How to share state between components?
        - Move State "upwards" (to a parent component)
- ```js
    const state = useState(0);

    function incrementCounterFunction(){
        console.log(state)
        console.log('increment clicked')
    }
    // so when the increment button gets clicked the useState would return two things 
    // 1) the value which is 0 here
    // 2) the function to update the state
    // i.e. [0, f]
  ```
- so the above code can be modified as below
- ```js
    // also remember to import use state  
    // import { useState } from 'react'
    const [count, setCount] = useState(0);
    // here we are taking the array which us coming back i.e. [0,f]
    // and we are taking each of those values and we're mapping it to another array
    // count is mapped to the first element which is returned by useState which is the current value of the state that is 0
    // setCount will be mapped to the function to update the state
    function incrementCounterFunction(){
        setCount(count + 1)
        console.log(count)
    }
  ```
- And this value of the count can be further updated in our span where we have hard coded it as 0
- ```js
    import { useState } from 'react'
    import './Counter.css'
    export default function Counter(){

        const [count, setCount] = useState(0);
        function incrementCounterFunction(){
            setCount(count + 1)
            console.log(count)
        }

        return (
            <div className="Counter">
                <span className="count">{count}</span>  // So here we have used the value of count instead of hard coded value
                <div>
                    <button className="counterButton" 
                            onClick={incrementCounterFunction}
                    >+1</button>
                </div>
            </div>
        )
    }
  ```
- ![React_UseState_Result_1](React_UseState_Result_1.PNG)
- So what is happening here is useState returns the array back, the first element in the array is the count value and the second element is the function and that's what is being returned back.
- And when we want to update the state, we are calling the function and adding 1 to the current state value.

## Lecture 195/10:05 - Exploring react State - what is happening in background?

- Similar to increment button we can have a decrement button also.
- ```js
    function decrementCounterFunction(){
        setCount(count - 1)
        console.log(count)
    }
    <button className="counterButton" 
            onClick={decrementCounterFunction}
    >-1</button>
  ```
- So we can see that upon updation of the state even the view is getting updated i.e we can see in the browser the increment and decrement.
-  What's happening in the background with react?
    - We updated the state => React updated the view
        - How can you update an HTML element?
            - A HTML page is represented by DOM (Document Object Model)
            - Each element in a HTML page is a node in the DOM
            - You need to update the DOM to update the element
            - HOWEVER, writing code to upgarde the DOM can be complex and slow!
        - React takes a different approach:
            - **Virtual DOM: "virtual"** representation of a UI (kept in memory)
                - React code updates Virtual DOM
            - React identifies changes and synchronizes them to HTML pages
                - 1: react creates virtual; DOM v1 on load of page
                - 2: You perform and action (you update the state)
                    - 3: react creates virtual DOM v2 as a result of your action
                    - 4: React performs a diff between v1 and v2
                    - 5: React synchronizes changes (updates HTML page)
            - Summary: We are NOT updating the DOM directly!
                - React identifies changes and efficiently updates the DOM

## Lecture 196/10:06 - Exploring React Props - Setting Counter increment value

- Let's create multiple counter buttons with their own state. So let's just add the counter component two more times in the App.js
- ```js
    function App() {
        return (
            <div className="App">
            My Todo Application // Now what we want want is that 
            <Counter></Counter> // this counter should always be incrementing by 1 and decrementing by 1
            <Counter></Counter> // this counter should always be incrementing by 2 and decrementing by 2
            <Counter></Counter> // this counter should always be incrementing by 5 and decrementing by 5
            </div>
        );
    }
  ```
- But right now all the three counters are incrementing by 1 and decrementing by 1. We need to avoid this duplication and that's where props comes in.
- Each component can be associated with a number of properties. *Props* are used for things that remain a constant during lifetime of a component
    - Example increment value of a specific component
- Let's create a functional component named `PlayingWithProps` in the App.js as shown below.
- ```js
    import './App.css';
    import Counter from './components/counter/Counter';

    function App() {
        return (
            <div className="App">
                My Todo Application
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <PlayingWithProps property1="value1" property2="value2"/>
            </div>
        );
    }

    function PlayingWithProps(properties){
        console.log(properties)
        console.log(properties.property1)
        console.log(properties.property2)
        return(
            <div>Props</div>
        )
    }
    export default App;
  ```
- Now here we will get back {property1: 'value1', property2: 'value2'} in the first console, value1 in the second console.log and value2 in the third console.
- So we can see that the values that we are passing as the values of property in the Component name can be retrieved back in the function as the parameter.
- Other way that we can get back the values is
- ```js
    function PlayingWithProps({property1, property2}){
        console.log(property1)
        console.log(property2)
        return(
            <div>Props</div>
        )
    }
  ```
- So now let's do the same with the Counter component, we will use the property name as *by* and will have values as 1,2, 5 as the values of these *by* in the props.
- ```js
    function App() {
    return (
        <div className="App">
            My Todo Application
            <Counter by="1"/>
            <Counter by="2"/>
            <Counter by="5"/>
        </div>
    );
    }
  ```
- Now we need to access these values in the Counter component also.
- ```js
    import './Counter.css'
    import { useState } from 'react'
    export default function Counter({by}){  // we have use the property name as by

        const[count, setCount] = useState(0);

        function incrementCounterFunction(){
            setCount(count + by);  // used it here also
        }

        function decrementCounterFunction(){
            setCount(count - by); // used it here also
        }

        return (
            <div className="Counter">
                <span className="count">{count}</span>
                <div>
                    <button className="counterButton" 
                            onClick={incrementCounterFunction}
                    >+{by}</button>
                    <button className="counterButton" 
                            onClick={decrementCounterFunction}
                    >-{by}</button>
                </div>
            </div>
        )
    }
  ```
- But right now it is doing a string append rather than mathematical addition

## Lecture 197/10:0 - Creating Multiple Counter Buttons

- We need to pass in the number within the braces as shown below.
- ```js
    function App() {
        return (
            <div className="App">
            My Todo Application
            <Counter by={1}/>
            <Counter by={2}/>
            <Counter by={5}/>
            </div>
        );
    }
  ```
- Now what if I want to add a constraint on the property to accept only certain type of values. This can be achieved by using prop types.
- So in the Counter.jsx we can set a prop type for your counter *import {PropTypes} from 'prop-types'* 
- ```js
    // Counter.jsx
    Counter.propTypes = {
        by: PropTypes.number // here by is the property name that we have used
    }
  ```
- So now if we provide the string in the App.js while making use of the Counter Component then it will run and give warning that string is provided and number was needed.
- In addition we can also give the default values to your properties.
- ```js
    //Counter.jsx
    Counter.defaultProps = {
    by: 1
    }
    // And if we don't provide any of the values to property in App.js
    // App.js
    function App() {
        return (
            <div className="App">
            My Todo Application
            <Counter /> // So if we remove by={1} from here then also the increment and decrement will happen by 1 because we have setted the defaultProps value as 1
            <Counter by={2}/>
            <Counter by={5}/>
            </div>
        );
    }
  ```
- ![Counter_DefaultPropValue=1](Counter_DefaultPropValue=1.PNG)

## Lecture 198/10:08 - Moving React State Up - Setting up Counter and Counter Button

- 1: Let's create multiple counter buttons   --- done
- 2: Let's have a different increment value for each button   --- done
- 3: Let's have common state for all our buttons  --- pending
    - Right now every button has it's own state i.e each button has it's own counter display. What we want is common state i.e 6 button but single state means displaying counter number should only be single.
    - Right now all the counter are defined in App.js So each of the individual counter have there own state.
    - We want to have state at a level above the counter itself, we would want to have a global state
    - **Moving State up and More....**
        - How can we have one state for all counters?
            - 1: Rename Counter to CounterButton
                - Right now what we're calling a counter is actually a CounterButton and we will create a new Counter class to have the real counter
                - So our code looks like this
                - ```js
                    // App.js
                    import './App.css';
                    import CounterButton from './components/counter/Counter'; // changed named here

                    function App() {
                        return (
                            <div className="App">
                            My Todo Application
                            <CounterButton />
                            <CounterButton by={2}/>
                            <CounterButton by={5}/>
                            </div>
                        );
                    }
                    export default App;

                    // Counter.jsx
                    import './Counter.css'
                    import { useState } from 'react'
                    import {PropTypes} from 'prop-types'

                    export default function CounterButton({by}){  // changed name here

                        const[count, setCount] = useState(0);

                        function incrementCounterFunction(){
                            setCount(count + by);
                        }
                        function decrementCounterFunction(){
                            setCount(count - by);
                        }
                        return (
                            <div className="Counter">
                                <span className="count">{count}</span>
                                <div>
                                    <button className="counterButton" 
                                            onClick={incrementCounterFunction}
                                    >+{by}</button>
                                    <button className="counterButton" 
                                            onClick={decrementCounterFunction}
                                    >-{by}</button>
                                </div>
                            </div>
                        )
                    }

                    CounterButton.propTypes = {
                        by: PropTypes.number
                    }

                    CounterButton.defaultProps = {
                        by: 1
                    }
                ```   
            - Now that we have the counter class we can move the responsibility of the all the counter buttons to the counter class.
            - So everything remains the same just we remove the *export default* from our CounterButton function and give it to the newly created Counter function in the Counter.jsx as shown below
            - ```js
                export default function Counter(){
                    return(
                        <>
                            <CounterButton />
                            <CounterButton by={2}/>
                            <CounterButton by={5}/>
                        </>
                    )
                }
              ```
            - And now as these function is carrying the responsibility of all the CounterButton we just need to make use of this Counter class in the App.js instead of the counterButtons.
            - ```js
                import Counter from './components/counter/Counter';

                function App() {
                    return (
                        <div className="App">
                        <Counter />
                        </div>
                    );
                }
              ```
            - And everything will work as its was earlier just that we have now called the Counter 1 time instead of the CounterButton 3 times in our App.js. The advantage is that we can start maintaining the state at the counter level. So how can we maintain state at the Counter level?
            - ```js
                export default function Counter(){
                    const[count, setCount] = useState(0);

                    return(
                        <>
                            <span className="totalCount">{count}</span>
                            <CounterButton />
                            <CounterButton by={2}/>
                            <CounterButton by={5}/>
                        </>
                    )
                }
              ```
            - So we can have a count which is maintained at the counter level and we can have a count i.e span as shown below which will be showing 0 currently.
            - ![CounterClass_SpanCurrentValue=0](CounterClass_SpanCurrentValue=0.PNG)
            - So now whenever a increment is clicked we want the parent state to change as well and to do that we will create a method on the parent.
            - ```js
                export default function Counter(){
                    const[count, setCount] = useState(0);

                    function incrementCounterParentFunction(by){
                        setCount(count + by);
                    }
                    return(
                        <>
                            <span className="totalCount">{count}</span>
                            <CounterButton />
                            <CounterButton by={2}/>
                            <CounterButton by={5}/>
                        </>
                    )
                }
            ```

## Lecture 199/10:09 -  Moving React State Up - Calling Parent Component Methods

- We now have state in the child component as well as in the parent component. We have created a parent component increment method as well and now we want to call it from all the CounterButtons
- The child components will not have access to the parent methods, the only way is for the parent method to pass it down. For example: let's create a method - someMethodInParent()
- ```js
    export default function Counter(){
        const[count, setCount] = useState(0);
        function incrementCounterParentFunction(by){
            setCount(count + by);
        }

        function someMethodInParent(){
            console.log("someMethodInParent is called")
        }
        
        return(
            <>
                <span className="totalCount">{count}</span>
                <CounterButton by={1} someMethodInParent={someMethodInParent}/>
                <CounterButton by={2} someMethodInParent={someMethodInParent}/>
                <CounterButton by={3} someMethodInParent={someMethodInParent}/>
            </>
        )
    }

    function CounterButton({by, someMethodInParent}){

        const[count, setCount] = useState(0);

        function incrementCounterFunction(){
            setCount(count + by);
            someMethodInParent();
        }

        function decrementCounterFunction(){
            setCount(count - by);
            someMethodInParent();
        }
    }
  ```
- So we have used the method name as property and value while calling the CounterButton and similarly we have passed on the method name to the function CounterButton and we have called it in increment and decrement functions.
- Now similarly we want the *incrementCounterParentFunction()* method to work for us. Before this let's remove the *someMethodInParent()* from our code.
- So the way we can do that is shown below
- ```js
    import './Counter.css'
    import { useState } from 'react'
    import {PropTypes} from 'prop-types'

    export default function Counter(){
        const[count, setCount] = useState(0);

        function incrementCounterParentFunction(by){
            setCount(count + by);
        }

        function decrementCounterParentFunction(by){
            setCount(count - by);
        }
        
        return(
            <>
                <span className="totalCount">{count}</span>
                <CounterButton by={1} 
                    incrementMethod={incrementCounterParentFunction} // we have stored the value incrementCounterParentFunction in property name incrementMethod
                    decrementMethod={decrementCounterParentFunction}/> // we have stored the value decrementCounterParentFunction in property name decrementMethod
                <CounterButton by={2} 
                    incrementMethod={incrementCounterParentFunction} 
                    decrementMethod={decrementCounterParentFunction}/>
                <CounterButton by={3} 
                    incrementMethod={incrementCounterParentFunction}  
                    decrementMethod={decrementCounterParentFunction}/>
            </>
        )
    }

    function CounterButton({by, incrementMethod, decrementMethod}){

        const[count, setCount] = useState(0);

        function incrementCounterFunction(){
            setCount(count + by);
            incrementMethod(by);  // we have used the by as parameter because the incrementCounterParentFunction expects a parameter which is by
        }

        function decrementCounterFunction(){
            setCount(count - by);
            decrementMethod(by);  // we have used the by as parameter because the decrementCounterParentFunction expects a parameter which is by
        }

        return (
            <div className="Counter">
                <span className="count">{count}</span>
                <div>
                    <button className="counterButton" 
                            onClick={incrementCounterFunction}
                    >+{by}</button>
                    <button className="counterButton" 
                            onClick={decrementCounterFunction}
                    >-{by}</button>
                </div>
            </div>
        )
    }

    CounterButton.propTypes = {
        by: PropTypes.number
    }

    CounterButton.defaultProps = {
        by: 1
    }
  ```

## Lecture 200/10:10 - Exploring React Developer Tools

- React Developer Tools - Chrome Extension
- Chrome Developer Tools extension for React
- Goal: Inspect React Component Hierarchies
- Components tab shows:
    - Root React components
    - Sub components that were rendered
- For each component, you can see and edit
    - props
    - state
- Useful for:
    - Understanding and Learning React
    - Debugging problems
- Let's now go back and make a separate module for CounterButton and for this let's create a CounterButton.jsx file in the counter folder and cut paste the code related to CounterButton from the Counter.jsx file
- ```js
    // Counter.jsx
    import './Counter.css'
    import { useState } from 'react'
    import CounterButton from './CounterButton'

    export default function Counter(){
        const[count, setCount] = useState(0);

        function incrementCounterParentFunction(by){
            setCount(count + by);
        }

        function decrementCounterParentFunction(by){
            setCount(count - by);
        }
        
        return(
            <>
                <span className="totalCount">{count}</span>
                <CounterButton by={1} 
                    incrementMethod={incrementCounterParentFunction} 
                    decrementMethod={decrementCounterParentFunction}/>
                <CounterButton by={2} 
                    incrementMethod={incrementCounterParentFunction} 
                    decrementMethod={decrementCounterParentFunction}/>
                <CounterButton by={3} 
                    incrementMethod={incrementCounterParentFunction} 
                    decrementMethod={decrementCounterParentFunction}/>
            </>
        )
    }
  ```
- And the CounterButton.jsx will look like shown below
- ```js
    import {PropTypes} from 'prop-types'
    import { useState } from 'react'

    export default function CounterButton({by, incrementMethod, decrementMethod}){
        const[count, setCount] = useState(0);

        function incrementCounterFunction(){
            setCount(count + by);
            incrementMethod(by);
        }

        function decrementCounterFunction(){
            setCount(count - by);
            decrementMethod(by);
        }

        return (
            <div className="Counter">
                
                <div>
                    <button className="counterButton" 
                            onClick={incrementCounterFunction}
                    >+{by}</button>
                    <button className="counterButton" 
                            onClick={decrementCounterFunction}
                    >-{by}</button>
                </div>
            </div>
        )
    }

    CounterButton.propTypes = {
        by: PropTypes.number
    }
    CounterButton.defaultProps = {
        by: 1
    }
  ```

## Lecture 201/10:11 - Adding Reset Button to Counter

- 

## Section 11 Started here
## Lecture