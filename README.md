# Personal Website
[](https://github.com/jpadwor1/Giphy/blob/main/PortfolioV2.gif)

See: [johnpadworski.dev](https://johnpadworski.dev).

My personal website. An [MIT](https://github.com/jpadwor1/Portfolio-V2/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), application. Built using modern JavaScript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), and other useful technologies.

## Adapting this Project

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below. Please feel free to reach out to me by filing an issue or emailing me for help configuring your project.

## Contributing

Contributions are actively encouraged. If you find a bug, please submit a pull request or submit an issue.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/jpadwor1/Portfolio-V2.git
cd Portfolio-V2
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

 ## Running

Run the following command to build the React application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

To deploy your site, follow the standard deployment process for a React application. If you're using GitHub Pages, ensure you've set up the repository settings correctly and have the necessary scripts in your `package.json`.

### Static Export

To statically export the site, run `npm run predeploy`. This generates a static export of the website in the `Portfolio-V2/build/` directory. Copy this and self-host or deploy to a CDN.

