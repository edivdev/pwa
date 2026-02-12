import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

import theme from '@/core/theme/theme.script';

interface ThemeColorShowcase {
  colorHex: string, reference: string, colorName: string
}

const ColorsShowcase = (): JSX.Element => {
  const colors: ThemeColorShowcase[] = [{ colorHex: theme.palette.primary.main, colorName: "primary.main", reference: "Primary Main" },
  { colorHex: theme.palette.primary.light, colorName: "primary.light", reference: "Primary Light" },
  { colorHex: theme.palette.secondary.main, colorName: "secondary.main", reference: "Secondary" },
  { colorHex: theme.palette.custom.mint, colorName: "custom.mint", reference: "Custom Mint" },
  { colorHex: theme.palette.custom.orange, colorName: "custom.orange", reference: "Custom Orange" },
  { colorHex: theme.palette.custom.purple, colorName: "custom.purple", reference: "Custom Purple" },
  { colorHex: theme.palette.custom.yellow, colorName: "custom.yellow", reference: "Custom Yellow" },
  { colorHex: theme.palette.common.black, colorName: "common.black", reference: "Common Black" },
  { colorHex: theme.palette.common.white, colorName: "common.white", reference: "Common White" },
  ]

  const colorCard = ({ colorHex, reference, colorName }: ThemeColorShowcase): JSX.Element => {
    return (
      <Card key={colorHex} sx={{ width: 150 }}>
        <Box
          sx={{
            width: "100%",
            height: 100,
            borderRadius: 0,
            bgcolor: colorHex,
          }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'fontWeightBold' }}>
            {reference}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {colorHex}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {colorName}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{
      p: 4,
      backgroundColor: 'common.white',
      borderRadius: 1,
    }}>
      <Typography variant="h3" sx={{ color: 'text.secondary' }}>
        Colors
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}>
        {colors.map((color) => colorCard(color))}
      </Box>
    </Box>
  )
};

export default ColorsShowcase;