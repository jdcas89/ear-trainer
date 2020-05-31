import React, { Component } from 'react';

export class MyErrorBoundary extends Component {
  state = {
    errorMessage: '',
  };
  static getDerivedStateFromError(error: any) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: any, info: any) {
    console.log(error.toString(), info.componentStack);
  }
  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}
