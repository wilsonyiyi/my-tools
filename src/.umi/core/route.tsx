// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","redirect":"parse-cookie","parentId":"@@/global-layout","id":"1"},"2":{"path":"/parse-cookie","parentId":"@@/global-layout","id":"2"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__parse-cookie__index" */'@/pages/parse-cookie/index.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/wilson/playgroud/my-tools/src/layouts/index.tsx')),
},
  };
}
