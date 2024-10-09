import { Card } from "./Card";

const cardData = [
    {
      active: 0,
      text: "Hotel Bookings",
      description: "Our hotel booking service is designed to help you secure the ideal stay for any occasion. Whether you're traveling for business,or a special event, we provide a wide array of lodging options to fit your needs and budget.",
    },
    {
      active: 1,
      text: "Car Rentals",
      description: "Unlock the joy of exploration with our convenient car rental service. Whether you're planning a weekend getaway, a business trip, or a family vacation, we offer a diverse fleet of vehicles to suit every need and preference.",
    },
    {
      active: 2,
      text: "Flight Bookings",
      description: "Take to the skies with ease through our efficient flight booking platform. Whether you're traveling for business or leisure, we make it simple to find and book the perfect flight for your journey.",
    },
    {
      active: 3,
      text: "Trips",
      description: "Embark on a journey of a lifetime with our curated trip packages designed to inspire and excite travelers of all kinds. Whether you're seeking adventure, relaxation, or cultural immersion, we have the perfect trip for you.",
    },
    {
      active: 4,
      text: "Cruise",
      description: "Discover the ultimate way to explore the world with our spectacular cruise offerings. Whether you're looking for a romantic getaway, a family vacation, or an adventure with friends, our cruises provide a unique experience on the open sea.",
    },
    {
      active: 5,
      text: "Activites",
      description: "Unleash your sense of adventure with our wide range of activities designed to create unforgettable experiences. Whether you're seeking thrilling outdoor escapades, cultural explorations, or relaxing leisure pursuits, we have something for everyone.",
    },
  ];
export const CardComponent = () => {
  return (
    <div>
        <div className="grid grid-cols-3 items-center p-4">
    {cardData.map((card, index) => (
      <Card 
        key={index} 
        active={card.active} 
        text={card.text} 
        description={card.description} 
      />
    ))}
  </div>
    </div>
  )
}
