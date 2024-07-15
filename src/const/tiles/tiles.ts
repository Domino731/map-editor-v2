import bathhouse from '../../assets/map/tiles/bathhouse.png';
import beachFall from '../../assets/map/tiles/beach_fall.png';
import beachSpring from '../../assets/map/tiles/beach_spring.png';
import beachSummer from '../../assets/map/tiles/beach_summer.png';
import beachWinter from '../../assets/map/tiles/beach_winter.png';
import boatTunnel from '../../assets/map/tiles/boat_tunnel.png';
import bugLand from '../../assets/map/tiles/bug_land.png';
import carolinesGreenhouse from '../../assets/map/tiles/carolines_greenhouse.png';
import coop from '../../assets/map/tiles/coop.png';
import darkroom from '../../assets/map/tiles/darkroom.png';
import desert from '../../assets/map/tiles/desert.png';
import desertFestival from '../../assets/map/tiles/desert_festival.png';
import dirtHoed from '../../assets/map/tiles/dirt_hoed.png';
import elliottsHouse from '../../assets/map/tiles/elliotts_house.png';
import farmhouse from '../../assets/map/tiles/farmhouse.png';
import festivals from '../../assets/map/tiles/festivals.png';
import fishpond from '../../assets/map/tiles/fishpond.png';
import flooring from '../../assets/map/tiles/flooring.png';
import island from '../../assets/map/tiles/island.png';
import islandCave from '../../assets/map/tiles/island_cave.png';
import islandFall from '../../assets/map/tiles/island_fall.png';
import islandFieldOffice from '../../assets/map/tiles/island_field_office.png';
import islandHut from '../../assets/map/tiles/island_hut.png';
import islandSpring from '../../assets/map/tiles/island_spring.png';
import islandSummer from '../../assets/map/tiles/island_summer.png';
import islandWinter from '../../assets/map/tiles/island_winter.png';
import jojaRuins from '../../assets/map/tiles/joja_ruins.png';
import minesSkullCavern from '../../assets/map/tiles/mines_skull_cavern.png';
import movieTheater from '../../assets/map/tiles/movie_theater.png';
import movieTheaterJoja from '../../assets/map/tiles/movie_theater_joja.png';
import mysteryCave from '../../assets/map/tiles/mystery_cave.png';
import nightMarket from '../../assets/map/tiles/night_market.png';
import outdoorsFall from '../../assets/map/tiles/outdoors_fall.png';
import outdoorsSpring from '../../assets/map/tiles/outdoors_spring.png';
import outdoorsSummer from '../../assets/map/tiles/outdoors_summer.png';
import outdoorsWinter from '../../assets/map/tiles/outdoors_winter.png';
import petBowls from '../../assets/map/tiles/pet_bowls.png';
import sewer from '../../assets/map/tiles/sewer.png';
import townInteriors from '../../assets/map/tiles/town_interiors.png';
import volcanoDungeon from '../../assets/map/tiles/volcano_dungeon.png';
import wallDiaggable from '../../assets/map/tiles/wall_diaggable.png';
import wallFloors from '../../assets/map/tiles/walls_floors.png';

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
        src: bathhouse,
        label: "Bathhouse",
        width: 240,
        height: 256
    },
    {
        id: 2,
        src: beachFall,
        label: "Beach fall",
        width: 272,
        height: 496
    },
    {
        id: 3,
        src: beachSpring,
        label: "Beach spring",
        width: 272,
        height: 496
    },
    {
        id: 4,
        src: beachSummer,
        label: "Beach summer",
        width: 272,
        height: 496
    },
    {
        id: 5,
        src: beachWinter,
        label: "Beach winter",
        width: 272,
        height: 496
    },
    {
        id: 6,
        src: boatTunnel,
        label: "Boat tunnel",
        width: 160,
        height: 208
    },
    {
        id: 7,
        src: bugLand,
        label: "Bug land",
        width: 128,
        height: 224
    }, {
        id: 8,
        src: carolinesGreenhouse,
        label: "Caroline's greenhouse",
        width: 256,
        height: 256
    },
    {
        id: 9,
        src: coop,
        label: "Coop",
        width: 64,
        height: 336
    },
    {
        id: 10,
        src: darkroom,
        label: "Dark room",
        width: 112,
        height: 128
    },
    {
        id: 11,
        src: desert,
        label: "Desert",
        width: 304,
        height: 368
    },
    {
        id: 12,
        src: desertFestival,
        label: "Desert festival",
        width: 512,
        height: 568
    },
    {
        id: 13,
        src: dirtHoed,
        label: "Dirt hoed",
        width: 192,
        height: 192
    },
    {
        id: 14,
        src: elliottsHouse,
        label: "Elliott's house",
        width: 64,
        height: 224
    },
    {
        id: 15,
        src: farmhouse,
        label: "Farmhouse",
        width: 192,
        height: 352
    },
    {
        id: 16,
        src: festivals,
        label: "Festivals",
        width: 512,
        height: 512
    },
    {
        id: 17,
        src: fishpond,
        label: "Fishpond",
        width: 160,
        height: 176
    },
    {
        id: 18,
        src: flooring,
        label: "Flooring",
        width: 512,
        height: 256
    },
    {
        id: 19,
        src: island,
        label: "Island",
        width: 512,
        height: 1168
    },
    {
        id: 20,
        src: islandCave,
        label: "Island cave",
        width: 96,
        height: 192
    },
    {
        id: 21,
        src: islandFall,
        label: "Island fall",
        width: 512,
        height: 640
    },
    {
        id: 22,
        src: islandFieldOffice,
        label: "Island field office",
        width: 160,
        height: 192
    },
    {
        id: 23,
        src: islandHut,
        label: "Island hut",
        width: 256,
        height: 288
    },
    {
        id: 24,
        src: islandSpring,
        label: "Island spring",
        width: 512,
        height: 640
    },
    {
        id: 25,
        src: islandSummer,
        label: "Island summer",
        width: 512,
        height: 640
    },
    {
        id: 26,
        src: islandWinter,
        label: "Island winter",
        width: 512,
        height: 640
    },
    {
        id: 27,
        src: jojaRuins,
        label: "Joja ruins",
        width: 256,
        height: 256
    },
    {
        id: 28,
        src: minesSkullCavern,
        label: "Mines / Skull cavern",
        width: 1280,
        height: 1248
    },
    {
        id: 29,
        src: movieTheater,
        label: "Movie theater",
        width: 256,
        height: 256
    },
    {
        id: 30,
        src: movieTheaterJoja,
        label: "Movie theater joja",
        width: 256,
        height: 256
    },
    {
        id: 31,
        src: mysteryCave,
        label: "Mystery cave",
        width: 240,
        height: 256
    },
    {
        id: 32,
        src: nightMarket,
        label: "Night market",
        width: 2048,
        height: 512
    },
    {
        id: 33,
        src: outdoorsFall,
        label: "Outdoors fall",
        width: 656,
        height: 1664
    },
    {
        id: 34,
        src: outdoorsSpring,
        label: "Outdoors spring",
        width: 656,
        height: 1664
    },
    {
        id: 35,
        src: outdoorsSummer,
        label: "Outdoors summer",
        width: 656,
        height: 1664
    },
    {
        id: 36,
        src: outdoorsWinter,
        label: "Outdoors winter",
        width: 656,
        height: 1664
    },
    {
        id: 37,
        src: petBowls,
        label: "Pet bowls",
        width: 288,
        height: 128
    },
    {
        id: 38,
        src: sewer,
        label: "Sewer",
        width: 128,
        height: 176
    },
    {
        id: 39,
        src: sewer,
        label: "Sewer",
        width: 128,
        height: 176
    },
    {
        id: 40,
        src: townInteriors,
        label: "Town interiors",
        width: 512,
        height: 1744
    },
    {
        id: 41,
        src: volcanoDungeon,
        label: "Valcano dungeon",
        width: 400,
        height: 576
    },
    {
        id: 42,
        src: wallDiaggable,
        label: "Wall diaggable",
        width: 480,
        height: 576
    },
    {
        id: 43,
        src: wallFloors,
        label: "Walls / Floors",
        width: 256,
        height: 848
    },
]
