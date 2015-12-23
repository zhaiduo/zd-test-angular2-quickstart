import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
        //return Promise.resolve(HEROES);
        return new Promise(resolve =>
            setTimeout(()=>resolve(HEROES), 20000) // 2 seconds
        );
    }
}