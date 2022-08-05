export class Meteo {
    daily!:{ 
        temperature_2m_min: Array<number>
        temperature_2m_max: Array<number>
        sunrise: Array<string>
        sunset: Array<string>
    }

    daily_units!: {
        temperature_2m_min: string
        temperature_2m_max: string
    }
}