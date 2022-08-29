import { RootState } from '@store/rootReducer';
import { useSelector } from 'react-redux';

export default function useFacility() {
  const { data } = useSelector((root: RootState) => root.facilityReducer);

  return {
    data,
  };
}
