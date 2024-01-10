export const quesAns = [
    {
        ques: "1. What is the purpose of the <!DOCTYPE html> declaration?",
        ans: "It declares the document type and version of HTML being used (HTML5 in this case) to the browser, ensuring that the document is parsed correctly.",
    },
    {
        ques: "2. What is the purpose of the <meta> tag?",
        ans: "The <meta> tag is used to provide metadata about the HTML document, such as the character set, viewport settings, and description."
    },
    {
        ques: "3. Explain the concept of semantic HTML.",
        ans: "Semantic HTML involves using HTML elements that carry meaning about the structure and content of a web page. Examples include <header>, <footer>, <article>, and <nav>."
    },
    {
        ques: " 4. What is the purpose of the z-index property?",
        ans: "The z-index property controls the stacking order of positioned elements. Elements with a higher z-index value appear in front of elements with a lower value."
    },
    {
        ques: "5. Explain the concept of specificity in CSS.",
        ans: "Specificity determines which style rule is applied when there are conflicting styles. It is based on the combination of selectors used in a rule."
    },
    {
        ques: "6. What is a CSS preprocessor, and why would you use one?",
        ans: "CSS preprocessors like Sass or Less extend the functionality of CSS by adding features like variables, nesting, and mixins. They help organize and maintain stylesheets more efficiently."
    },
    {
        ques: "7. Explain the difference between let, const, and var in JavaScript.",
        ans: "let and const are block-scoped, while var is function-scoped. const is used for constant values that cannot be reassigned."
    },
    {
        ques: "8. Explain the concept of closures in JavaScript.",
        ans: "Closures occur when a function is defined within another function, allowing the inner function to access the outer function's variables. Closures have access to their own scope, the outer function's scope, and the global scope."
    },
    {
        ques: "9. Explain the concept of promises in JavaScript.",
        ans: "Promises are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous code compared to callbacks."
    },
    {
        ques: "10. What is the difference between == and === in JavaScript?    ",
        ans: "== is the equality operator that performs type coercion if the operands are of different types, while === is the strict equality operator that checks both value and type without coercion."
    },
    {
        ques: "11. Explain the concept of Virtual DOM in React.",
        ans: "The Virtual DOM is an in-memory representation of the real DOM elements. React uses it to optimize the updating process by comparing the virtual DOM with the actual DOM and updating only the changed parts."
    },
    {
        ques: "12. Explain the difference between state and props in React.",
        ans: "State is an internal data storage used to manage the component's dynamic data, while props (short for properties) are external data passed into a component as attributes."
    },
    {
        ques: "13. What is Redux, and when would you use it in a React application?",
        ans: "Redux is a state management library for JavaScript applications, particularly useful for managing complex states in large React applications. It provides a predictable state container."
    },
    {
        ques: "14. What is the significance of the componentDidMount lifecycle method in class components?",
        ans: "componentDidMount is called after a component has been rendered to the DOM. It is often used to perform actions that require interaction with the DOM or data fetching."
    },
    {
        ques: "15. What do you understand by Version Control System?",
        ans: "A Version Control System (VCS) is a program that is used to record any changes to a file or set of data so that we can restore it to a previous version if needed. It ensures that everyone on the team is working on the most up-to-date file version."
    },
    {
        ques: "16. What do you understand by a callback function?",
        ans: "A callback function is a function that is passed as an argument to another function and ensures that a function is not going to run before a task is completed. This function runs right after the task has been completed."
    },
    {
        ques: "17. What is a CDN?",
        ans: "A content delivery network (CDN) is a system for delivering content to users based on geographic location. CDNs can deliver websites, software applications, and other types of digital content."
    },
    {
        ques: "18. What is AJAX?",
        ans: "AJAX is a web development technique for creating asynchronous web applications. AJAX allows you to create dynamic, responsive web applications that can be updated without reloading the page."
    },
    {
        ques: "19. What are the differences between HTML and XHTML?",
        ans: "HTML is the standard markup language for creating web pages. XHTML is a stricter and more well-defined version of HTML. It's frequently used for formatting more complex documents within a stated taxonomy."
    },
    {
        ques: "20. What is a pseudo-class?",
        ans: "A pseudo-class is a selector that styles an element based on its state. For example, the :hover pseudo-class styles an element when the user hovers over it with their mouse but does nothing when they don't."
    },
    {
        ques: "21. What is the spread operator ?",
        ans: "The spread operator (...) is used to unpack arrays or objects.It allows you to expand elements that are iterable, such as arrays and strings."
    },
    {
        ques: "22. What is recursion?",
        ans: "Recursion is an approach to problem-solving where a function solves a problem by reusing itself within its own function body. In simple terms, it's when a function calls itself."
    },
    {
        ques: "23. What is a web server?",
        ans: "A web server is a program that serves web pages to clients on the World Wide Web. It listens for requests from clients and responds with HTML documents or other types of files such as images, videos, or audio."
    },
    {
        ques: "24. What is a domain name and how is it used in web development?",
        ans: "A domain name is a unique name that identifies a website on the internet. It is used in web development to make it easier for users to remember and access a website. Domain names are associated with IP addresses, which are the actual numerical addresses that computers use to communicate with each other on the internet. When a user types a domain name into a web browser, the browser uses a system called DNS (Domain Name System) to look up the associated IP address and then sends a request to that IP address for the website content. An example of a domain name is 'google.com'."
    },
    {
        ques: "25. What is the purpose of a DNS server in web development?",
        ans: "In web development, the Domain Name System (DNS) server is responsible for translating domain names into IP addresses."
    },
    {
        ques: "26. What is API ?",
        ans: "API stands for Application Programming Interface. It is a set of rules and protocols that allows one software application to interact with another. APIs define the methods and data formats that applications can use to communicate with each other. They serve as a bridge between different software systems, enabling them to work together, share data, and perform specific tasks."
    },
    {
        ques: "27. What are arrow functions and how do they differ from regular functions?",
        ans: "Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They differ from regular functions in that they have a lexical 'this' and do not have their own arguments object, making them better suited for certain use cases."
    },
    {
        ques: "28. Explain the concept of 'hoisting' in JavaScript.",
        ans: "Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. It allows variables and functions to be used before they are declared in the code."
    },
    {
        ques: "29. What is the difference between server-side rendering (SSR) and client-side rendering (CSR)?",
        ans: "Optimal Answer: In SSR, the initial HTML is generated on the server and sent to the client, allowing for faster initial render and better SEO. In CSR, the initial HTML is rendered on the client side using JavaScript, which may result in slower initial load times but can enable more dynamic and interactive applications."
    },
    {
        ques: "30. Explain 'this' keyword in javascript.",
        ans: "The 'this' keyword is a reference variable that refers to the current object."
    },
    {
        ques: "31. What do you mean by BOM?",
        ans: "Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object."
    },
    {
        ques: "32. What is Git?",
        ans: "Git is a version control system for tracking changes in computer files and is used to help coordinate work among several people on a project while tracking progress over time. In other words, it’s a tool that facilitates source code management in software development."
    },
    {
        ques: "33. What is GitHub?",
        ans: "To provide Internet hosting for version control and software development, GitHub makes use of Git. "
    },
    {
        ques: "34. What does git clone do?",
        ans: "Git clone allows you to create a local copy of the remote GitHub repository. Once you clone a repo, you can make edits locally in your system rather than directly in the source files of the remote repo."
    },
    {
        ques: "35. What is JSX?",
        ans: "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in JavaScript files, making it easier to describe the structure of React components."
    },
    {
        ques: "36. What is prop drilling in React?",
        ans: "Prop drilling in React refers to the process of passing data (props) from a higher-level component down to a lower-level component through multiple intermediate components. "
    },
    {
        ques: "37. What is React Hooks?",
        ans: "React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components."
    },
    {
        ques: "38. Explain the difference between GET and POST methods in HTML forms.",
        ans: "GET is used for sending a small amount of data, and the data is appended to the URL. POST is used for sending a large amount of data, and the data is sent in the request body."
    },
    {
        ques: "39. What is the box model in CSS?",
        ans: "The CSS box model consists of content, padding, border, and margin. It defines how these components interact with each other in rendering elements on a web page."
    },
    {
        ques: "40. What is difference between Git and Github?",
        ans: "Git is a distributed version control system, while GitHub is a web-based platform that provides hosting for Git repositories. Git is the software used for version control, and GitHub is a service that hosts Git repositories and provides additional collaboration features."
    },
    {
        ques: "41. What is the purpose of forking a repository on GitHub?",
        ans: "Forking a repository creates a copy of the original repository under your GitHub account. It allows you to make changes to the codebase without affecting the original project. Forks are often used when contributing to open-source projects."
    },
    {
        ques: "42. How do you resolve a merge conflict in Git?",
        ans: "A merge conflict occurs when Git is unable to automatically merge changes from different branches. To resolve a merge conflict, you need to manually edit the conflicting files, mark them as resolved, and then commit the changes."
    },
    {
        ques: "43. Explain the concept of rebasing in Git.",
        ans: "Rebasing is the process of moving or combining a sequence of commits to a new base commit. It is often used to maintain a clean and linear project history. Rebasing should be done with caution, especially in shared branches."
    },
    {
        ques: "44. What is responsive web design, and how can it be achieved?",
        ans: "Responsive web design is an approach to design and build websites that adapt to various screen sizes and devices. It can be achieved using fluid grids, flexible images, and media queries."
    },
    {
        ques: "45. What are controlled and uncontrolled components in React forms?",
        ans: "Controlled components are forms elements whose value is controlled by React state, while uncontrolled components allow the form elements to maintain their own state."
    },
    {
        ques:"46. What is Flux Concept In React?",
        ans:"Facebook widely uses flux architecture concept for developing client-side webapplications. It is nof a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow."
    },
    {
        ques:"47. Define the term Redux in React",
        ans:"Redux is a library used for front end development. It is a state container for JavaScriptapplications which should be used for the applications state management. You can test and run an application developed with Redux in different environments."
    },
    {
        ques:"48. What is the 'Store' feature in Redux?",
        ans:"Redux has a feature called 'Store' which allows you to save the application's entire State at one place. Therefore all it's component's State are stored in the Store so that you will get regular updates directly from the Store. The single state tree helps you to keep track of changes over time and debug or inspect the application."
    },
    {
        ques:"49. What is an action in Redux?",
        ans:"It is a function which returns an action object. The action-type and the action data are always stored in the action object. Actions can send data between the Store and the software application. All information retrieved by the Store is produced by the actions."
    },
    {
        ques:"50. Explain the term stateless components.",
        ans:"Stateless components are pure functions that render DOM-based solely on the properties provided to them."
    },
    {
        ques:"51. What is meant by callback function? What is its purpose?",
        ans:"A callback function should be called when setState has finished, and the component is retendered. As the setState is asynchronous, which is why it takes in a second callback function."
    },
    {
        ques:"52. Explain synthetic event in React js.",
        ans:"Synthetic event is a kind of object which acts as a cross-browser wrapper around the browser's native event. It also helps us to combine the behaviors of various browser into signal API."
    },
    {
        ques:"53. Whatis React State?",
        ans:"It is an object which decides how a specific component renders and how it behaves. The state stores the information which can be changed over the lifetime of a React component."
    },
    {
        ques:"54. How can you update state in react js?",
        ans:"A state can be updated on the component directly or indirectly."
    },
    {
        ques:"55. Explain the use of the arrow function in React.",
        ans:"The arrow function helps you to predict the behavior of bugs when passed as a callback. Therefore, it prevents bug caused by this all together."
    },
    {
        ques:"56. Explain pure components in React js.",
        ans:"Pure components are the fastest components which can replace any component with only a render(). It helps you to enhance the simplicity of the code and performance of the application."
    },
    {
        ques:"57. What is 'create-react-app'?",
        ans:"‘create-react-app' is a command-line tool which allows you to create one basic react application."
    },
    {
        ques:"58. Explain the use of ‘key’ in react list.",
        ans:"Keys allow you to provide each list element with a stable identity. The keys should be unique."
    },
    {
        ques:"59. Explain error boundaries?",
        ans:"Error boundaries help you to catch Javascript error anywhere in the child components.They are most used to log the error and show a fallback UI."
    },

    {
        ques:"60. What is the use of empty tags ?",
        ans:"Empty tags are used in React for declaring fragments."
    },
    {
        ques:"61. Explain strict mode.",
        ans:"StrictMode allows you to run checks and warnings for react components. It runs only on development build. It helps you to highlight the issues without rendering any visible Ul."
    },
    {
        ques:"62. What are reacted portals?",
        ans:"Portal allows you to render children into a DOM node. CreatePortalmethod is used for it."
    },
    {
        ques:"63. What is Context?",
        ans:"React context helps you to pass data using the tree of react components. It helps you to share data globally between various react components."
    },
    {
        ques:"64. What is the use of Webpack?",
        ans:"Webpack in basically is a module builder. It is mainly runs during the development process."
    },
    {
        ques:"65. What is Babel in React js?",
        ans:"Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain old ES5 JavaScript that most browsers understand."
    },
    {
        ques:"66. How can a browser read JSX file ?",
        ans:"If you want the browser to read JSX, then that JSX file should be replaced using a JSX transformer like Babel and then send back to the browser."
    },
    {
        ques:"67. What is the reduction?",
        ans:"The reduction is an application method of handling State."
    },
    {
        ques:"68. Explain the term reconciliation.",
        ans:"When a component's state or props change then rest will compare the rendered element with previously rendered DOM and will update the actual DOM if it is needed. This process is known as reconciliation."
    },
    {
        ques:"69. How can you re-render a component without using setState() function?",
        ans:"You can use forceUpdate() function for re-rending any component."
    },
    //{
    //    ques:"70. ",
    //    ans:""
    //},
    //{
    //    ques:"71. ",
    //    ans:""
    //},


]