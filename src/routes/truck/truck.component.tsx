import { useParams } from 'react-router-dom';
import { useGetTruckQuery } from '@/services/trucks/trucks.service';

import type { ApiError } from '@/types/trucks-api.type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { Loader } from '@/components';
import { ErrorMessage, TruckContainer } from './truck.styles';

const Truck = () => {
  const { id } = useParams();
  const { data = [], isLoading, isError, error } = useGetTruckQuery(+id!);

  const truck = data[0];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorMessage>
        {`There was an error fetching truck: ${
          
          // show fetch error 
          ((error as FetchBaseQueryError).data as ApiError).message ||
            
          // or show default text
          'Unknown error'
        }`}
      </ErrorMessage>
    );
  }

  return (
    <TruckContainer>

      {truck && (
        <ul>
          <li>Applicant: {truck.applicant || '-'}</li>
          <li>Location: {truck.locationdescription || '-'}</li>
          <li>Address: {truck.address || '-'}</li>
          <li>Food items: {truck.fooditems || '-'}</li>
          <li>Schedule: {truck.dayshours || '-'}</li>
        </ul>
      )}

    </TruckContainer>
  );
};

export default Truck;
