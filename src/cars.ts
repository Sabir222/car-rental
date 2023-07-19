export interface Car {
  id: number;
  name: string;
  picture: string;
  gear: string;
  type: string;
  capacity: number;
  price: number;
  litres: number;
  liked: boolean;
}
export const cars: Car[] = [
  {
    id: 1,
    name: "Select Car",
    picture: "/logo.png",
    gear: "N/A",
    type: "N/A",
    capacity: 0,
    price: 0,
    litres: 0,
    liked: false,
  },
  {
    id: 2,
    name: "Rolls roys",
    picture: "/rolls.png",
    gear: "automatic",
    type: "luxury saloon",
    capacity: 6,
    price: 490,
    litres: 70,
    liked: false,
  },
  {
    id: 3,

    name: "Duster",
    picture: "/duster.png",
    gear: "manual",
    type: "SUV",
    capacity: 6,
    price: 50,
    litres: 70,
    liked: true,
  },
  {
    id: 4,

    name: "Mercedes AMG",
    picture: "/amg.png",
    gear: "manual",
    type: "Sport",
    capacity: 4,
    price: 90,
    litres: 90,
    liked: false,
  },
  {
    id: 5,

    name: "Bently Continental",
    picture: "/bently.png",
    gear: "Automatic",
    type: "Luxury Car",
    capacity: 6,
    price: 350,
    litres: 70,
    liked: false,
  },
  {
    id: 9,
    name: "Ford Mustang",
    picture: "/mustang.png",
    gear: "Automatic",
    type: "Sport",
    capacity: 2,
    price: 80,
    litres: 40,
    liked: false,
  },
  {
    id: 6,
    name: "Bugatti",
    picture: "/bugatti.png",
    gear: "Automatic",
    type: "Luxury Car",
    capacity: 2,
    price: 750,
    litres: 80,
    liked: false,
  },
  {
    id: 7,
    name: "Chevy Camaro",
    picture: "/camaro.png",
    gear: "Automatic",
    type: "Sport",
    capacity: 4,
    price: 80,
    litres: 50,
    liked: false,
  },
  {
    id: 8,
    name: "Ferrari",
    picture: "/ferrari.png",
    gear: "Automatic",
    type: "Sport",
    capacity: 2,
    price: 150,
    litres: 60,
    liked: false,
  },
];
