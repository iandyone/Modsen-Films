import { RootState, store } from '@store/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type DispatchType = typeof store.dispatch;
export const useDispatchTyped: () => DispatchType = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
