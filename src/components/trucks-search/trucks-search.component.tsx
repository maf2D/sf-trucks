import type { ChangeEventHandler, FC } from 'react';
import { Input } from './trucks-search.styles';

type TrucksSearchProps = {
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
};

const TrucksSearch: FC<TrucksSearchProps> = ({
  placeholder,
  changeHandler,
  value
}) => (
  <Input
    type='text'
    placeholder={placeholder || 'Search'}
    value={value}
    onChange={changeHandler}
  />
);

export default TrucksSearch;
