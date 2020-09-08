import * as express from 'express';
import AuthUserRouter from '../routes/UserRouter';
import PostRouter from '../routes/PostRouter';
import CommentRouter from '../routes/CommentRouter';

export default class Router {
    /**
     * @function
     * @param {express.Application} app
     * @summary init Application router
     * @returns void
     */
    public static init(app: express.Application): void {
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
                message: 'page not found',
            });
        });

        /**
         * @function
         * @inner
         * @param {express.Router}
         */
        app.use(router);
    }
}
