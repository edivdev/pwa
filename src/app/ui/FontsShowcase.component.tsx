import { Box, Card, CardContent, Divider, Typography, TypographyVariant } from '@mui/material';

const FontsShowcase = (): JSX.Element => {
  return (
    <>
      <Box sx={{
        p: 4,
        backgroundColor: 'common.white',
        borderRadius: 1,
      }}>
        <Typography variant="h3" sx={{ color: 'text.secondary' }}>
          Fonts
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{
          display: 'flex',
          gap: 2,
        }}>
          <Card sx={{ minWidth: 'fit-content' }}>
            <CardContent>
              {['fontWeightBold', 'fontWeightMedium', 'fontWeightRegular'].map((fontWeight) =>
                <Typography key={fontWeight} variant="body1" sx={{ fontWeight }}>
                  {fontWeight}
                </Typography>)}
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'].map((fontSize) =>
                <Typography key={fontSize} variant={fontSize as TypographyVariant} >
                  {fontSize}
                </Typography>)}
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 'fit-content' }}>
            <CardContent>
              {['Quicksand', 'Just Another Hand'].map((fontFamily) =>
                <Typography key={fontFamily} variant='h1' sx={{ fontFamily }}>
                  {fontFamily}
                </Typography>)}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  )
};

export default FontsShowcase;