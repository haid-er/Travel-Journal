import Card from "./Card";
import data from "../travelCardsData.js";
export default function Carousel() {
  const cardData = data;
  console.log(cardData);
  let i = 0;
  const els = cardData.map(d => (
    <Card key={i++} {...d} image={`/img${i + 1}.png`} />
  ));
  console.log(els);
  return (
    <>
      <div className="container mx-auto flex flex-col gap-10 my-10">{els}</div>
    </>
  );
}
