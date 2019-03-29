import React from 'react';

export default class NotefulFormError extends React.Component {
    state = {hasError: false};
    // Static method
    static getDerivedStateFromError(error) {
        return {hasError:true}
        // Called when an error is thrown in a child component
       
        // Store the error in the state
        
    }
    render() {
        // If there was an error, show an error page
        if (this.state.hasError) {
            return (
                <main className="error-page">
                    <h1>Something seems to have gone wrong</h1>
                    <p>Try refreshing the page</p>
                </main>
            );
        }
        // Otherwise, render the children
        return this.props.children;
    }
}