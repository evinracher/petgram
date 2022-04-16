import React from 'react';
import { Helmet } from 'react-helmet';
import { Div, Title, Description } from './styles';

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        {title && <title>Petgram | {title}</title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children}
      </Div>
    </>
  );
};
