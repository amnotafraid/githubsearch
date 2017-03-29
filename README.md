# Githubsearch - Display User Profile Data

Once the dependencies are installed, you can start the application by typing:
```
npm start
```
It will automatically open up a browser window to [localhost:3000](http://localhost:3000/).

The first thing I had to do was to change `repose` to `repos` in app/components/profile.component.ts.

In the profile component an input was added.  There is a function to call on keyup which will search for a github user name.
```
.
|-- app.component.js
|-- app.component.js.map
|-- app.component.spec.js
|-- app.component.spec.js.map
|-- app.component.spec.ts
|-- app.component.ts
|-- app.module.js
|-- app.module.js.map
|-- app.module.ts
|-- components
|   |-- profile.component.html
|   |-- profile.component.js
|   |-- profile.component.js.map
|   `-- profile.component.ts
`-- services
    |-- github.service.js
    |-- github.service.js.map
    `-- github.service.ts
```
