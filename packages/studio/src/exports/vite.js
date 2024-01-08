import { relative, resolve } from 'node:path';

export function studio() {
  return {
    name: 'studio',

    config() {
      return {
        resolve: {
          alias: [
            {
              find: '~studio.config.js',
              replacement: resolve(process.cwd(), 'studio.config.js'),
            },
          ],
        },
      };
    },
  };
}

export function registerStudio() {
  function resolveRouteFile(...pathSegments) {
    return relative(
      '.',
      resolve(
        '..',
        'node_modules',
        'unding-studio-remix',
        'app',
        'routes',
        ...pathSegments,
      ),
    );
  }

  return {
    async routes(defineRoutes) {
      return defineRoutes((route) => {
        route('/:admin', resolveRouteFile('index.tsx'), () => {
          route(
            'content-types',
            resolveRouteFile('content-types', 'index.tsx'),
            () => {
              route(
                ':contentType',
                resolveRouteFile('content-types', '$contentType.tsx'),
              );
              route(
                ':contentType/:cid',
                resolveRouteFile('content-types', '$contentType.$cid.tsx'),
              );
            },
          );
        });

        route('auth', resolveRouteFile('auth', 'index.tsx'), () => {
          route('login', resolveRouteFile('auth', 'login.tsx'));
          route('logout', resolveRouteFile('auth', 'logout.tsx'));
          route('register', resolveRouteFile('auth', 'register.tsx'));
        });
      });
    },
  };
}
