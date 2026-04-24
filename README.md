<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=600&lines=Frontend+Learning+Journey;HTML+%E2%86%92+CSS+%E2%86%92+JS+%E2%86%92+React;Building+from+the+ground+up." alt="Typing SVG" />

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## The Journey

This is a living document of my frontend learning path. Every stage below is something I have actually built, practiced, and understood. Not just watched. Not just read. Written, broken, fixed, and shipped.

---

## Timeline

```
[STAGE 1]──────[STAGE 2]──────[STAGE 3]──────[STAGE 4]──────[STAGE 5]──────► [NEXT]
  HTML/CSS       JS Core        React           State &         Hooks
                                Basics          Rendering
```

---

## Stage 1 : HTML and CSS

**Folder:** `HTML/`

Built real projects from scratch. Covered every core concept hands-on.

```
HTML
  structure, semantic tags, forms, tables, media elements

CSS
  selectors, specificity, cascade
  box model, display, positioning, float
  flexbox, grid
  transitions, transforms, animations
  responsive design with media queries
  CSS variables, shadows, pseudo-selectors

Projects
  Netflix clone  (HTML/css/Cascade/Netflixclone/)
  Navbar layouts, card UIs, search bars
  Bounce animations, flex navbars
```

> Status: Complete

---

## Stage 2 : JavaScript

**Folder:** `JS/`

Went deep into core JS before touching any framework.

```
Core
  variables, data types, functions, scope
  conditionals, loops, arrays, strings
  objects, IDs, DOM selection

DOM
  querying and manipulating elements
  inserting and removing nodes
  event listeners, event bubbling

Advanced
  array methods  (.map, .filter, .reduce)
  callbacks
  promises
  async / await
```

> Status: Complete

---

## Stage 3 : React Basics

**Folder:** `AppProps/`

```
Setup
  React with Vite
  project structure, JSX syntax

Components
  functional components
  component composition and reuse

Props
  passing data from parent to child
  destructuring props in child component

  example:
    <Navbar color={"cyan blue"} />

    const Navbar = ({ color }) => {
      return <div>I am a Navbar of {color} color</div>
    }
```

> Status: Complete

---

## Stage 4 : State and Rendering

**Folder:** `Conditionalrendering/`

```
useState
  managing count state
  toggle boolean state
  storing and rendering a list

Conditional Rendering
  ternary:       condition ? <Component /> : ""
  short-circuit: condition && <Component />

List Rendering
  .map() over an array of objects
  passing each item as a prop
  unique key prop on each element

  example:
    {todos.map(todo => (
      <Todo todo={todo} key={todo.title} />
    ))}
```

> Status: Complete

---

## Stage 5 : React Hooks

**Folder:** `UseRef/Propp/`

```
useEffect
  no dependency array    runs on every render
  empty array []         runs only on first render
  with [value]           runs when that value changes
  return inside effect   cleanup on unmount

  example:
    useEffect(() => {
      alert("Count changed")
    }, [count])

useRef
  persists value across renders without causing re-render
  DOM access via ref.current
  tracking render count

  example:
    const btnref = useRef()
    btnref.current.style.backgroundColor = "red"
    btnref.current.style.display = "none"
```

> Status: Complete

---

## What is Next

These are the remaining topics in order of priority.

```
HOOKS AND PATTERNS
  [ ] useContext       global state, no prop drilling
  [ ] useReducer       complex state logic
  [ ] useMemo          memoize expensive calculations
  [ ] useCallback      memoize functions
  [ ] Custom Hooks     extract and reuse logic

ROUTING AND FORMS
  [ ] React Router     multi-page navigation, dynamic routes
  [ ] Forms            controlled inputs, validation
  [ ] React Hook Form  form library

DATA AND STATE
  [ ] fetch / axios    API calls, loading and error states
  [ ] Zustand          lightweight global state
  [ ] Redux Toolkit    scalable state management

STYLING
  [ ] Tailwind CSS     advanced utility-first styling
  [ ] ShadCN / MUI     component libraries

PRODUCTION SKILLS
  [ ] TypeScript       type-safe components and props
  [ ] Testing          Jest, React Testing Library
  [ ] Next.js          SSR, SSG, file-based routing, full-stack React
  [ ] Deployment       Vercel, Netlify, CI/CD
```

---

## Project Structure

```
Frontend_learning/
  HTML/
    css/Cascade/          CSS deep dive, animations, layouts
    css/Cascade/Netflixclone/   Netflix UI clone
    index.html            HTML fundamentals

  JS/
    DOM.js / Dom_use.html       DOM manipulation
    Events/                     event listeners, bubbling
    callback/ Asyncc/           async JS, promises, callbacks
    arrays.js / arrayloops.js   array methods and loops

  AppProps/               React props + useEffect
  Conditionalrendering/   useState + conditional + list render
  UseRef/Propp/           useRef DOM access + render tracking
```

---

## Concepts at a Glance

| Concept | What I Know |
|---|---|
| HTML Semantics | Structure, forms, tables, media |
| CSS Layout | Flexbox, Grid, positioning, responsive |
| CSS Animations | Transitions, transforms, keyframes |
| JS DOM | Query, manipulate, insert, remove nodes |
| JS Async | Callbacks, Promises, async/await |
| useState | Create and update reactive state |
| useEffect | Side effects on render, mount, update, unmount |
| useRef | Persist values and access DOM without re-render |
| Props | Pass data from parent to child |
| Conditional Render | && and ternary patterns |
| List Render | .map() with unique key prop |

---

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&duration=4000&pause=2000&color=888888&center=true&vCenter=true&width=500&lines=Every+expert+was+once+a+beginner.;Keep+building.+Keep+shipping." alt="Quote" />

</div>
