import beachFall from '../assets/map/tiles/beach_fall.png';
import beachSpring from '../assets/map/tiles/beach_spring.png';
import beachSummer from '../assets/map/tiles/beach_summer.png';
import beachWinter from '../assets/map/tiles/beach_winter.png';

export interface TileData {
    id: number;
    src: string;
    label: string;
    width: number;
    height: number;

}

export const TilesData: TileData[] = [
    {
        id: 1,
        src: beachFall,
        label: "Beach fall",
        width: 272,
        height: 496
    },
        {
        id: 2,
        src: beachSpring,
        label: 'Beach spring',
                    width: 272,
        height: 496
    },
        {
        id: 3,
        src: beachSummer,
        label: 'Beach summer',
                    width: 272,
        height: 496
    },
        {
        id: 4,
        src: beachWinter,
            label: 'Beach winter',
                    width: 272,
        height: 496
    },
]