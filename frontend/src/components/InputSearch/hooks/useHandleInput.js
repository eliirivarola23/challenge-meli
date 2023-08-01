import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';

export const useHandleInput = ({ handleChangeSearch, handleSubmitSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => Object.fromEntries(new URLSearchParams(location.search))?.search?.replace('=', ''), [location.search]);
  const [value, setValue] = useState(searchParams || '');

  const navigateToList = () => {
    if (handleSubmitSearch) return handleSubmitSearch();
    navigate(`${PublicRoutes.LIST_OF_PRODUCTS}?${new URLSearchParams({ search: value.replace('=', '') }).toString()}`);
  };

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
    if (handleChangeSearch) handleChangeSearch(e);
  };

  const handleSubmit = () => {
    if (value.trim() && !!value) navigateToList();
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && value.trim()) navigateToList();
  };

  useEffect(() => {
    setValue(searchParams || '');
  }, [searchParams]);

  return { handleChange, handleSubmit, handleKeyPress, value };
};
