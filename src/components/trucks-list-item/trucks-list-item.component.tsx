import { forwardRef, memo } from 'react';
import { TrucksListItemContainer } from './trucks-list-item.styles';
import FoodTrackImg from '@/assets/food-truck.png';

type TrucksListItemProps = {
  applicant: string;
  address: string;
  id: string;
};

const TrucksListItem = memo(
  forwardRef<HTMLAnchorElement, TrucksListItemProps>(({
    id,
    applicant,
    address
  }, ref) => (
    <TrucksListItemContainer
      to={`/truck/${id}`}
      img={FoodTrackImg}
      ref={ref}
    >
      <h2>{applicant}</h2>

      <p>{address}</p>
    </TrucksListItemContainer>
  ))
);

export default TrucksListItem;
