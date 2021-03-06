import { Injectable, NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

    public static configure(opts: cors.CorsOptions) {
        this.options = opts;
    }

    private static options: cors.CorsOptions;

    public use(req: any, res: any, next: any) {
        if (CorsMiddleware.options) {
            cors(CorsMiddleware.options)(req, res, next);
        }
        cors()(req, res, next);
    }
}
