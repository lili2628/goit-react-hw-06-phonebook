import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/filterSlice';
import {FilterLable, FilterInput} from './Filter.styled';


function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
 
  
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

