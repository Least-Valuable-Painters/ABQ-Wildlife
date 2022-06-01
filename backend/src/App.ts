
import express, { Application } from 'express'
import morgan from 'morgan'
const session = require("express-session")

// Routes
import CommentRoute from "./apis/comment/comment.route";
import SignupRoute from "./apis/signup/signup.route";
import {SigninRoute} from "./apis/signin/signin.route";
import {SignoutRoute} from "./apis/signout/signout.route";
import {indexRoute} from "./apis/index.route";

const MemoryStore = require('memorystore')(session)

// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () : void {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () :void {
        const sessionConfig = {
            store: new MemoryStore({
                checkPeriod: 100800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };

        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig))
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () {
        // TODO add "/apis"
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/signup', SignupRoute)
        this.app.use('/apis/signin', SigninRoute)
        this.app.use('/apis/signout', SignoutRoute)
        this.app.use('/apis/comment', CommentRoute)
    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully.')
    }
}


