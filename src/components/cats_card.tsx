import Cat from "../data/catModel";
import { CatImage } from "./cat_image";
import { CatImagesData } from "../data/catImage-data";

interface CatCardProps {
  cat: Cat;
  index: number;
  imageFectcher?: () => Promise<string>;
}

const CatCard: React.FC<CatCardProps> = ({ cat, index }) => {
  return (
    <div key={cat.name + index} className='card'>
      <h3 className='card__text card__header'>{cat.name}</h3>
      <CatImage
        image={CatImagesData[index].image}
        altText={CatImagesData[index].altText}
        licenceType={CatImagesData[index].licenceType}
        licenceUrl={CatImagesData[index].licenceUrl}
        attributionName={CatImagesData[index].attributionName}
        attributionUrl={CatImagesData[index].attributionUrl}
      />
      <p className='card__text'>Species: {cat.species}</p>
      <p className='card__text'>Favourite Food(s): {cat.favFoods}</p>
      <p className='card__text'>Birth Year: {cat.birthYear}</p>
    </div>
  );
};

export default CatCard;
