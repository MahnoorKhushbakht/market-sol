import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function CardStyle({ children }) {
  return (
    <Card
      variant="outlined"
      sx={{
        flexGrow: 1,
        backgroundColor: 'transparent',
        border:'none',
        width: '100%',
        display:'flex',
        textJustify:'center'
      }}

    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardStyle;
