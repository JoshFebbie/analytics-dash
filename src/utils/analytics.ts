import { redis } from '@/lib/redis';

type AnalyticsArgs = {
    retention?: number;
}

export class Analytics {
    private retention: number = 60 * 60 * 24 * 7; // 30 days

    constructor(opts?: AnalyticsArgs) {
        if (opts?.retention) this.retention = opts.retention;
    }

    async track(namespace: string, event: object = {}) {

        const key = `analytics::${namespace}`;

        //DB call to store the event
        await redis.hincrby(key, JSON.stringify(event), 1);
    }
}

export const analytics = new Analytics();
