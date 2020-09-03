import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as session from 'express-session';
import * as express from 'express';
import 'reflect-metadata';
import createDbConnection from './connection';

export default class Middleware {
    public static init(app: express.Application): void {
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
                secret: 'keyboard cat',
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
    }
}
