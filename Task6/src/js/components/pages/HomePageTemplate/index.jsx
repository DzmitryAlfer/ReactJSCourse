import React from 'react';
import DocumentHeaderContainer from '../../../containers/DocumentHeaderContainer'

export const HomePageTemplate = (props) => {
    return (
        <React.Fragment>
            <DocumentHeaderContainer/>
            {props.children}
        </React.Fragment>
    );
};

export function withHomePageTemplate(WrappedComponent) {
    return (props) => {
        return(
            <HomePageTemplate {...props}>
                <WrappedComponent {...props}/>
            </HomePageTemplate>
        );
    };
}