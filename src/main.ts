import { PlanetaryBody } from "./planets/PlanetaryBody";


export class Main {
    public static main(): number {
        console.log('Hello Main World.');
        let home : PlanetaryBody = new PlanetaryBody('home');
        home.logme('haleluggga');
        return 0;
    }
}

Main.main();