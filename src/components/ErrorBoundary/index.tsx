import { ErrorState } from '@components/ErrorState';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // TODO: сделать error page
      return (
        <Suspense fallback=''>
          <ErrorState message='Unexpected error while the application is running' withReloadingButton={true} />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
