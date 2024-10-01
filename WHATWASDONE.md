Ctrl+Shift+P
Preference Color Scheme
settings, prefernce tab
webbrowser ctrl+shift+c then click

testing
click on terminal drop down select Javascript Debug Terminal
https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
https://dev.to/this-is-learning/file-nesting-in-vs-code-46l5

What I did for interview part 2:
Read the problems.
went to reference webpages, can't decided what to do 

looked up solutions to boggle and poker in typescript/react
hoped to find cool algo for findinASWSg non repeating adjacent elements in 2d array
looked for images of cards
looked at all the react stuff and realized i have no clue what im doing

got skeleton node.js project
ran it

searched for Fullstack React & Node.js + TypeScript to get all projects into one git repo
Given a 4x4 matrix of letters chosen randomly from A-Z (with replacement, so a given letter may be used more than once), and a list L of english words (you can use any word list you’d like); write a program to output all the words present in the matrix per the rules of Boggle. Your program should be able to accept pre-set 4x4 matrices and word lists in a reasonable (text-based) format of your choosing. Rules of Boggle for your reference. 
https://en.wikipedia.org/wiki/Boggle

https://www.javatpoint.com/boggle-find-all-possible-words-in-a-board-of-characters
https://www.algotree.org/algorithms/trie/trie_dfs_boggle/
https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/
https://kyleclapper.dev/boggle/
https://github.com/ibnumusyaffa/node-ts-esm-starter-minimal
https://leejjon.medium.com/sharing-code-between-frontend-and-backend-in-a-full-stack-typescript-app-1c8711c40304
https://medium.com/@vishalchouhan2012/building-full-stack-applications-with-typescript-node-js-and-react-js-32104310b244
https://github.com/sds/boggle-solver/blob/master/js/boggle.js
https://medium.com/@ashalabi13/solving-boggle-using-depth-first-searches-and-prefix-trees-9c3faa89ea99
https://www.geeksforgeeks.org/boggle-using-trie/
https://www.robinwieruch.de/react-starter/
https://github.com/jonluca/vite-typescript-ssr-react
https://www.freecodecamp.org/news/use-typescript-with-react/
https://danielnagy.me/posts/Post_usaivhdu3j5d
https://dev.to/janoskocs/setting-up-a-react-project-using-vite-typescript-vitest-2gl2
https://medium.com/@nedopaka/setup-a-react-vite-project-with-typescript-prettier-vitest-2024-9bb6e919ac8f
https://www.geeksforgeeks.org/how-to-redirect-in-react-with-typescript/
https://www.geeksforgeeks.org/how-to-setup-reactjs-with-vite/
https://www.geeksforgeeks.org/8-ways-to-style-react-components/
https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/
https://leandroaps.medium.com/building-a-modern-react-app-with-vite-vitest-typescript-eslint-prettier-and-husky-abc7a9876e9d
https://medium.com/@msgold/creating-a-simple-client-side-data-grid-in-react-and-typescript-e631e14fb815
https://codesandbox.io/p/sandbox/typescript-react-canvas-hex-grid-f4yj5?file=%2Fsrc%2Fcomponents%2FCanvas%2Fdraw.utils.ts
https://medium.com/@ademyalcin27/building-a-stylish-tic-tac-toe-game-with-react-typescript-and-tailwind-css-f95cf06983e1
https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/
https://stackoverflow.com/questions/77217290/best-way-to-use-react-context-with-usestate-in-typescript
https://medium.com/@aren.talb00/what-is-context-api-in-react-how-use-it-5360fc36da91
https://plainenglish.io/blog/how-to-use-react-fc-children-prop-in-react-18-with-typescript-6ab7b2c901ce
https://blog.logrocket.com/how-to-use-react-context-typescript/
https://medium.com/@aren.talb00/creating-a-custom-file-input-using-react-and-useref-233f5d4abfc9
https://medium.com/@jijun.tang.data/parse-json-object-with-variables-in-typescript-211007293456 
https://www.geeksforgeeks.org/how-to-reset-a-file-input-in-react-js/
https://12daysofweb.dev/2023/filereader-api/
https://generate-random.org/word-generator?count=1000&type=lowercase
https://www.linkedin.com/pulse/how-use-context-react-hooks-mike-cronin-rwace

ts help:
https://dev.to/yanhaijing/mastering-javascript-multiple-ways-to-generate-a-two-dimensional-array-cpg
https://dev.to/g33konaut/reading-local-files-with-javascript-25hn
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText
https://oida.dev/typescript-never-and-error-handling/
https://www.shecodes.io/athena/8931-creating-a-string-with-variables-in-javascript
https://howtodoinjava.com/typescript/sets/
https://www.almabetter.com/bytes/tutorials/javascript/multidimensional-array-in-javascript
https://dev.to/thinhda/unit-testing-in-nodejs-and-typescript-a-comprehensive-guide-with-jest-integration-2902
https://runthatline.com/how-to-use-typescript-with-vitest/
https://dev.to/danywalls/testing-private-methods-in-typescript-3np5
https://www.tutorialsteacher.com/typescript/data-modifiers
https://vitest.dev/api/
https://vitest.dev/config/#testtimeout
https://vitest.dev/guide/debugging

general:
https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github

live help:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

boggle: two multiple paths same word


npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init

npm init -y
npm install express cors class-transformer class-validator
npm install @types/express @types/cors @types/node typescript ts-loader ts-node webpack webpack-cli webpack-node-externals copy-webpack-plugin -D

 
npm install @types/class-validator @types/cors @types/node @types/express -D

https://dev.to/janoskocs/setting-up-a-react-project-using-vite-typescript-vitest-2gl2
Vite React:
npm create vite dlp-sample
- react -> typescript
npm install -D vitest
npm install -D @testing-library/react @testing-library/jest-dom jsdom

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p