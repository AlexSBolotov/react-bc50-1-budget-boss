import axios from 'axios';
import { useSelector } from 'react-redux';

export function useLogCheck() {
  const token = useSelector(state => state.auth.accessToken);

  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
