# Resources and Thought Process

TL:DR Resources are listed at the end
### Task Selection
After reading the assignment I had to immediately go to the internet to gather information. I had never solved the boggle problem or the life problem so I didn't know how simple or complicated they were.

After a bit of reading I broke down the problem as follows:
- Life - Heavy algorithm usage, limited user interaction
- Poker - Very light algorithm usage, heavy user interaction
- Boggle -  Medium to light algorithm usage, medium user interaction

I selected Boggle because I could slowly get back into React UI stuff since I had not dealt with it in years. It also had a lot of resources for inspiration should I need help.

I ended up keeping it simple and not using the Trie.

### Moving Through the Task

Since I was very very rusty with React I decided to start with the UI. I suspected my old way of doing things was too old so I jumped through a lot of webpages to see what was the most active and ended up with React+Vite.

I tried to use some of the packages I had previously used including the react-router and the react context. There was also a thought to set up a server to dish out the logic and the react app would just call it and display it. Clearly too much, so backed down, and went with a simple react app.
#### Using react
The next challenges where the visuals, I basically failed, but I did avoid messing with raw CSS. The React context was a bit more interesting and it was good to see it hadn't changed too much. I wanted to use the context so that I could split up components and not have huge ones. I eventually got the UI displaying the boggle board and loading the needed files.
#### Typescript stuff
The boggle solver was next, and I chose to break it into a solver class, letter selector, and word matcher. And then it turns out I was really really rusty with general typescript so I did a lot of google searching for stuff that I would consider basic.
#### Testing
Once I got all the code written and looking like it should work, I started the testing round. If I had known that the Vite testing was super easy I would have started with that part first. Needless to say none of my stuff worked, but with the tests, I eventually sorted out what was wrong.

I then connected up the boggle solver to the UI and then got working on the rest. Sadly no time for UI tests.

### Parting thoughts
- I had high hopes to do the fancy version of the search but it took too long for me to get up to speed with typescript.
- I also wanted to implement the poker one, but that was also a bridge too far for the time I had.
- Seems like I got Typescript back and react seems more natural again!
- I really enjoyed the task, but I think I might have over thought/researched it.


#### Resource List

Boggle:
- https://en.wikipedia.org/wiki/Boggle
- https://www.javatpoint.com/boggle-find-all-possible-words-in-a-board-of-characters
- https://www.algotree.org/algorithms/trie/trie_dfs_boggle/
- https://www.geeksforgeeks.org/-boggle-find-possible-words-board-characters/
- https://kyleclapper.dev/boggle/

Life:
- https://en.wikipedia.org/wiki/Conway's_Game_of_Life

Poker:
- Nothing, fairly familiar with poker

React initial:
- https://github.com/ibnumusyaffa/node-ts-esm-starter-minimal
- https://leejjon.medium.com/sharing-code-between-frontend-and-backend-in-a-full-stack-typescript-app-1c8711c40304
- https://medium.com/@vishalchouhan2012/building-full-stack-applications-with-typescript-node-js-and-react-js-32104310b244
- https://github.com/sds/boggle-solver/blob/master/js/boggle.js
- https://medium.com/@ashalabi13/solving-boggle-using-depth-first-searches-and-prefix-trees-9c3faa89ea99
- https://www.geeksforgeeks.org/boggle-using-trie/
- https://www.robinwieruch.de/react-starter/
- https://github.com/jonluca/vite-typescript-ssr-react
- https://www.freecodecamp.org/news/use-typescript-with-react/
- https://danielnagy.me/posts/Post_usaivhdu3j5d
- https://dev.to/janoskocs/setting-up-a-react-project-using-vite-typescript-vitest-2gl2
- https://medium.com/@nedopaka/setup-a-react-vite-project-with-typescript-prettier-vitest-2024-9bb6e919ac8f
- https://www.geeksforgeeks.org/how-to-redirect-in-react-with-typescript/
- https://www.geeksforgeeks.org/how-to-setup-reactjs-with-vite/
- https://www.geeksforgeeks.org/8-ways-to-style-react-components/
- https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/
- https://leandroaps.medium.com/building-a-modern-react-app-with-vite-vitest-typescript-eslint-prettier-and-husky-abc7a9876e9d

React visuals:
- https://medium.com/@msgold/creating-a-simple-client-side-data-grid-in-react-and-typescript-e631e14fb815
- https://codesandbox.io/p/sandbox/typescript-react-canvas-hex-grid-f4yj5?file=%2Fsrc%2Fcomponents%2FCanvas%2Fdraw.utils.ts
- https://medium.com/@ademyalcin27/building-a-stylish-tic-tac-toe-game-with-react-typescript-and-tailwind-css-f95cf06983e1

React context:
- https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/
- https://stackoverflow.com/questions/77217290/best-way-to-use-react-context-with-usestate-in-typescript
- https://medium.com/@aren.talb00/what-is-context-api-in-react-how-use-it-5360fc36da91
- https://plainenglish.io/blog/how-to-use-react-fc-children-prop-in-react-18-with-typescript-6ab7b2c901ce
- https://blog.logrocket.com/how-to-use-react-context-typescript/

React file reading:
- https://medium.com/@aren.talb00/creating-a-custom-file-input-using-react-and-useref-233f5d4abfc9
- https://medium.com/@jijun.tang.data/parse-json-object-with-variables-in-typescript-211007293456
- https://www.geeksforgeeks.org/how-to-reset-a-file-input-in-react-js/
- https://12daysofweb.dev/2023/filereader-api/

All the typescript help:
- https://dev.to/yanhaijing/mastering-javascript-multiple-ways-to-generate-a-two-dimensional-array-cpg
- https://dev.to/g33konaut/reading-local-files-with-javascript-25hn
- https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText
- https://oida.dev/typescript-never-and-error-handling/
- https://www.shecodes.io/athena/8931-creating-a-string-with-variables-in-javascript
- https://howtodoinjava.com/typescript/sets/
- https://www.almabetter.com/bytes/tutorials/javascript/multidimensional-array-in-javascript
- https://dev.to/thinhda/unit-testing-in-nodejs-and-typescript-a-comprehensive-guide-with-jest-integration-2902
- https://runthatline.com/how-to-use-typescript-with-vitest/
- https://dev.to/danywalls/testing-private-methods-in-typescript-3np5
- https://www.tutorialsteacher.com/typescript/data-modifiers

Testing with Vite
- https://vitest.dev/api/
- https://vitest.dev/config/#testtimeout
- https://vitest.dev/guide/debugging