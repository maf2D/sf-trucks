import { useCallback, useMemo, useState } from 'react';
import { useGetTrucksQuery } from '@/services/trucks/trucks.service';
import { useIntersection } from '@/hooks/use-intersection/use-intersection.hook';

import type { ChangeEvent } from 'react';

import { Loader, TrucksList, TrucksSearch } from '@/components';
import { TrucksContainer } from './trucks.styles';

const Trucks = () => {

  const [searchStr, setSearchStr] = useState('');
  const [fetchTrucksCount, setFetchTrucksCount] = useState(20);

  // using fetch truck count as an alternative to a skip attribute, cuz there is no such an attribute in api
  const { data: trucks = [], isLoading } = useGetTrucksQuery(fetchTrucksCount, {
    refetchOnMountOrArgChange: true,
    skip: false
  });

  // update trucks count when intersecting last element
  const intersectionFn = useIntersection(
    () => setFetchTrucksCount(trucks.length + 20),
    !isLoading
  );

  const filteredTrucks = useMemo(
    () => {
      if (!searchStr) return trucks;

      return trucks.filter(
        (truck) => truck.fooditems
          ?.toLowerCase()
          .includes(searchStr.toLowerCase())
      );
    },
    [trucks, searchStr]
  );

  const trucksSearchHandler = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setSearchStr(target.value);
    },
    []
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TrucksContainer>
      <TrucksSearch
        changeHandler={trucksSearchHandler}
        value={searchStr}
        placeholder='Enter some food...'
      />

      <TrucksList
        trucks={filteredTrucks}
        intersectionFn={intersectionFn}
      />
    </TrucksContainer>
  );
};

export default Trucks;
