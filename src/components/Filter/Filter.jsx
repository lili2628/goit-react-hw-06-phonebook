import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import { FilterLable, FilterInput } from './Filter.styled';
import { getFilter } from 'store/selectors';


function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
 
  
  return (
    <FilterLable>Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </FilterLable>
  );
}

export default Filter;

