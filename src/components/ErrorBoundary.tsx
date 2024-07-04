import React from 'react';

interface Error {
  error: boolean;
}

interface Props {
  children: JSX.Element;
}

class ErrorBoundary extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    const { error } = this.state as Error;
    if (error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
