import type { ReactNode } from 'react';
import {
  useContext,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

type ToastControllerContextValue = {
  isVisible: boolean;
  setIsVisible(isVisible: boolean): void;
};

export const ToastControllerContext = createContext<
  ToastControllerContextValue | undefined
>(undefined);

export type ToastControllerProviderProps = {
  children: ReactNode;
};

export function ToastControllerProvider({
  children,
}: ToastControllerProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  const value = useMemo(
    () => ({
      isVisible,
      setIsVisible,
    }),
    [isVisible]
  );

  return (
    <ToastControllerContext.Provider value={value}>
      {children}
    </ToastControllerContext.Provider>
  );
}

export function useToast() {
  const { setIsVisible } = useToastController();

  const show = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  return show;
}

export function useToastController() {
  const value = useContext(ToastControllerContext);

  if (value === undefined) {
    throw Error('Have you wrapped with ToastControllerProvider');
  }

  return value;
}
