## Movie App

### To run the project locally, follow the steps below:

First, install the dependencies:

```bash
npm install
# or
yarn install
```

and then run the development server:

```bash
npm start
# or
yarn start
```

and your local server will be running on [http://localhost:3000](http://localhost:3000)

and finally, run the fake API server:

```bash
npx json-server --watch db.json --port 4000
# or
yarn json-server --watch db.json --port 4000
```

and your fake API server will be running on [http://localhost:4000](http://localhost:4000)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
