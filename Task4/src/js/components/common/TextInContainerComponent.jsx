import React from 'react';
import PropTypes from 'prop-types';
import {TextComponent} from "./TextComponent";

export const TextInContainerComponent = ({text, containerClass, textClass}) => (
    <div className={containerClass}>
        <TextComponent text={text} className={textClass} />
    </div>
);

TextInContainerComponent.propTypes = {
  text: PropTypes.string,
  containerClass: PropTypes.string,
  textClass: PropTypes.string,
};