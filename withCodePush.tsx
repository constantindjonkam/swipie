import React, {ComponentType} from 'react';
import CodePushManager from './CodePushManager';

const withCodePush = (Component: ComponentType) => {
  const WithCodePush: React.FC = () => {
    return (
      <>
        <CodePushManager />
        <Component />
      </>
    );
  };

  return WithCodePush;
};
export default withCodePush;
