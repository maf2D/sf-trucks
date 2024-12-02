import type { FC, Ref } from 'react';
import type { Truck } from '@/types/trucks-api.type';

import { TrucksListItem } from '@/components';
import { TrucksListContainer } from './trucks-list.styles';

type TrucksListProps = {
  trucks: Truck[];
  intersectionFn: Ref<HTMLAnchorElement>;
};

const TrucksList: FC<TrucksListProps> = ({ trucks, intersectionFn }) => (
  <TrucksListContainer>

    {trucks.map(({ applicant, objectid, address }, idx) => (
      <TrucksListItem
        id={objectid}
        applicant={applicant}
        address={address}
        key={objectid}
        ref={idx === trucks.length - 1 ? intersectionFn : undefined}
      />
    ))}

  </TrucksListContainer>
);

export default TrucksList;
