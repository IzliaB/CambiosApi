export class weather{

    coord: {
        lon: number,
        lat: number
    };
    weather:[{
        id: number,
        main: string,
        description: string,
        icon : any
    },
    {
        id: number,
        main: string,
        description: string,
        icon: any
    }];
    base: string;
    main:{
        temp: number, 
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    };
    visibility: number;
    wind:{
        speed: number,
        deg: number
    };
    clouds:{
        all: number
    };
    dt: number;
    sys: {
        type: number,
        id: number,
        message: number, 
        country: string,
        sunrise: number,
        sunset: number
    };
    id: number;
    name: string;
    cod: number;



constructor (
    coord: {
        lon: number,
        lat: number
    },
    weather:[{
        id: number,
        main: string,
        description: string,
        icon : any
    },
    {
        id: number,
        main: string,
        description: string,
        icon: any
    }],
    base: string,
    main:{
        temp: number, 
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
    },
    visibility: number,
    wind:{
        speed: number,
        deg: number
    },
    clouds:{
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number, 
        country: string,
        sunrise: number,
        sunset: number
    },
    id: number,
    name: string,
    cod: number,
){
    this.coord = coord;
    this.weather = weather;
    this.base = base;
    this.main = main;
    this.visibility = visibility;
    this.wind = wind;
    this.clouds = clouds;
    this.dt = dt;
    this.sys = sys;
    this.id = id;
    this.name = name;
    this.cod = cod;
}





}