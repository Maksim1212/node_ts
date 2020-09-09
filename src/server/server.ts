import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as session from 'express-session';
import { Connection, createConnection } from 'typeorm';
import AuthUserRouter from '../routes/UserRouter';
import PostRouter from '../routes/PostRouter';
import CommentRouter from '../routes/CommentRouter';
import { User } from '../models/User';
import Post from '../models/Post';
import Comment from '../models/Comment';
import 'reflect-metadata';
import { sessionSecret, connectionConfig } from '../config/config';
import ValidationError from '../error/ValidationError';

/**
 * @type {express}
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @description express.Application Middleware
 */
async function createDbConnection(): Promise<Connection> {
    const entities = [User, Post, Comment];

    return createConnection({
        type: 'mysql',
        host: connectionConfig.host,
        port: connectionConfig.port,
        username: connectionConfig.username,
        password: connectionConfig.password,
        database: connectionConfig.database,
        entities,
        synchronize: true,
    });
}
createDbConnection();

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
// parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());
// returns the compression middleware
app.use(compression());
// helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
// can be used to enable CORS with various options
app.use(cors());
app.use(
    session({
        cookie: { maxAge: 3600000 },
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
    }),
);
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
    res.header('Access-Control-Allow-Credentials', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,' +
            ' Content-Type, Accept,' +
            ' Authorization,' +
            ' Access-Control-Allow-Credentials',
    );
    next();
});

/**
 * @description express.Application Routes
 */
const router: express.Router = express.Router();

/**
 * Forwards any requests to the /v1/auth URI to AuthUserRouter.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
app.use('/v1/auth', AuthUserRouter);

/**
 * Forwards any requests to the /posts URI to PostRouter.
 * @name /posts
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
app.use('/posts', PostRouter);

/**
 * Forwards any requests to the /comments URI to CommentRouter.
 * @name /comments
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
app.use('/comments', CommentRouter);

/**
 * @description No results returned mean the object is not found
 * @function
 * @inner
 * @param {callback} middleware - Express middleware.
 */
app.use((req: express.Request, res: express.Response) => {
    res.status(404).json({
        error: {
            message: 'Page not found',
        },
    });
});

/**
 * @function
 * @inner
 * @param {express.Router}
 */
app.use(router);

app.use((error: ValidationError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(400).json({
        error: {
            name: error.name,
            message: error.message,
            parametr: error.param,
            value: error.value,
        },
    });
    next();
});

app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({
        error: {
            name: error.name,
            message: error.message,
        },
    });
    next();
});

/**
 * @description sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

export default app;
