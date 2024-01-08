import { Box, Flex } from 'ui';

import styles from './Page.module.css';

export function Page({ children }) {
  return (
    <Flex alignItems="center" className={styles.inner} justifyContent="center">
      <Box className={styles.container}>{children}</Box>
    </Flex>
  );
}
