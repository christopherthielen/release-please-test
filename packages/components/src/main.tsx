import type React from 'react';

export interface MainProps {
  text: string;
}

export const Main: React.VFC<MainProps> = ({ text }) => <main>This is the text: {text}</main>;
