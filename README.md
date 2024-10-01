# CSNW Coding Sample: David Li Pino

A React + Typescript + Vite demo for the sample problems put forth for the interview.

The boggle problem was selected for the assignment.
The application runs as a React with no backing server and has limited interaction.


## How to run
#### Environment
Running on a linux distro:
- Ensure that Node is at v22.9.0. Using [nvm](https://github.com/nvm-sh/nvm) greatly simplifies that process

#### Getting and running
Source code can be retrieved from the open Github [repo](https://github.com/dlipino/CSNW-demo-dlp).

- Get the source code and enter directory
```bash
git clone git@github.com:dlipino/CSNW-demo-dlp.git
cd CSNW-demo-dlp
```
- Load npm packages and run application in dev mode
```bash
npm install
npm run dev
```
The console will provide a link do ctrl+right-click on the link to open a browser to the url (http://localhost:5173/).
On the welcome page click the 'Go to Boggle' button or add '/boggle' to the local url.

The UI will have the following buttons (so sorry about the off center and inconsistent UI):
- `Reset Board` -> Fills boggle board with new values.
- `Load New Board` -> opens a file dialog to select a predefined boggle board and uses those values.A json file a sample file is provided /helperFiles/boggle/test2Darray.json
- `Load Boggle Library:(library count)`-> opens a load file dialog for selecting and loading the library to use for solving the boggle board. A sample library file is provided at /helperFiles/boggle/testLibrary.
- `Solve Board: (solved count)`-> Solves the boggle board that is visible and displays the results. Also shows number of solutions present.


#### Running tests

To run the tests:
```bash
npm run test
```