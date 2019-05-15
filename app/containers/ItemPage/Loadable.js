/**
 * Asynchronously loads the component for ItemsPage
 */

import React from './node_modules/react';
import loadable from './node_modules/utils/loadable';
import LoadingIndicator from './node_modules/components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
