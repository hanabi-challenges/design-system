import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    mantine: 'src/mantine.tsx',
  },
  format: ['esm'],
  dts: {
    resolve: false,
    tsconfig: 'tsconfig.build.json',
  },
  external: [
    'react',
    'react/jsx-runtime',
    'react-dom',
    '@mantine/core',
    'react-router-dom',
  ],
  clean: true,
  treeshake: true,
});
