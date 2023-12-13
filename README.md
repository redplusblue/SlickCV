# SlickCV

### SlickCV is a free resume builder that helps you create a professional resume in minutes.

[![Pages Deployment](https://github.com/redplusblue/SlickCV/actions/workflows/main.yml/badge.svg)](https://github.com/redplusblue/SlickCV/actions/workflows/main.yml)

<table>
  <td align="center"><b>Made using:</b></td>
  <td> 
    <img title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" alt="React" />
    <img title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="40" height="40" alt="JavaScript" />
    <img title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" />
    <img title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" width="40" height="40" alt="CSS3" />
    <img title="Vite" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" width="40" height="40" alt="Vite" />
    <img title="npm" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" height="40" alt="npm" />
  </td>
</table>

###### Additional libraries used: eslint [for react], prop-types, uuid [For key generation]

## **Click on the pictures/the link below to try!**

<a href="https://redplusblue.github.io/SlickCV/"><img src="preview/live-use.gif" alt="Live Use Preview GIF" title="Click Me!"></a>
<a href="https://redplusblue.github.io/SlickCV/"><img src="preview/layout.png" alt="Layout Preview" title="Click Me!"></a>
<a href="https://redplusblue.github.io/SlickCV/"><img src="preview/print.png" alt="Print Preview" title="Click Me!"></a>

## [Click to open](https://redplusblue.github.io/SlickCV/)

## Features:

1. Does all the basic stuff (Add about you, education, experience info.).
2. Live reload: Whatever changes you make to any part of the resume are shown in real time on the right side.
3. No limit to number of sections or number of pages.
4. Can add bullet points in Experience section.
5. Can save the resume as PDF or print it directly.
6. [ 🏗️ Under Construction ] Your progress is saved in real time as you edit the resume using localStorage. So if the tab closes or refreshes, it can just reload the information for you.

I think it looks kinda neat too :D

## What I used/learned:

1. React: States, Hooks, hot reloading, react-dom, components, props, nested components, shared states, 
2. Using JS with React to store constants, and run scripts to interact with the DOM.
- An important lesson I learned about detailed planning before creating components, otherwise you waste more time re-creating things than it would've taken had you planned it out beforehand.

### What I did well (I think):

1. Code is clean and modularized.  
2. Webpage is aligned and styled proportionately, with minimalism in mind. Most of the elements are symmetrical. Sudden changes in layout are reduced to a minimum and animations are used to smoothen the transition.
3. User experience is smooth and intuitive, especially because of the real time changes.

### Problems I encountered:

1. Lots of redesign. TONS of it. At a point I had to re-create all components despite them somewhat working because there needed to be a shared state for the live preview functionality.
2. A lot of the visual elements did not scale well as more components were added and had to be removed.
3. Development process was kind of rocky for personal reasons, because of which there werent consistent contributions, which led to more redesigns which in hindsight, could've been avoided.
4. Deployment was TERRIBLE. Github actions is absolutely horrible, I ran into an issue where I couldn't delete a workflow even after deleting the .yml file and it kept running to the point where I had to disable actions and migrate to a new repository, because, for some reason Github actions does not allow deleting workflows ://

<br>

###### An exercise for [TheOdinProject](theodinproject.com)

