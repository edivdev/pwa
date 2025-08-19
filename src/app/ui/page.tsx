import { Box } from "@mui/material";

import ColorsShowcase from "./ColorsShowcase.component";
import FontsShowcase from "./FontsShowcase.component";

const UiPage = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 4, gap: 3 }}>
      <ColorsShowcase />
      <FontsShowcase/>
    </Box>
  )
};

export default UiPage;