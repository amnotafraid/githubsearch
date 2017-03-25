# Githubsearch - Add Github Services

Once the dependencies are installed, you can start the application by typing:
```
npm start
```
It will automatically open up a browser window to [localhost:3000](http://localhost:3000/).

So, all I did was add a service and inject HttpModule.  I suspect that `import 'rxjs/add/operator/map'` in services\github.service.ts may no longer be necessary with the latest Angular.  The directory structure in src/app looks like this:
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
