import useMediaQuery from "@mui/material/useMediaQuery";
import { MediaQueries } from "./Limit";

export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(MediaQueries.xs);
  const isSmall = useMediaQuery(MediaQueries.sm);
  const isMedium = useMediaQuery(MediaQueries.md);
  const isLarge = useMediaQuery(MediaQueries.lg);
  const isTablet = useMediaQuery(MediaQueries.xl);
  const isLaptop = useMediaQuery(MediaQueries.xxl);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
