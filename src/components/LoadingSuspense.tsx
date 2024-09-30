import { Box, CircularProgress } from "@mui/material";
import { Suspense } from "react";

const LoadingSuspense = ({ children }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
};

const Loading = () => {
  return (
    <Box sx={{ position: 'fixed', top: 8, right: 8 }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingSuspense;

type Props = {
  children?: React.ReactNode;
};