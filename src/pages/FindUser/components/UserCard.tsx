import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type UserCardProps = {
  citizen: {
    fullName: string
    nis: number
  }

}

export default function UserCard({ citizen }: UserCardProps) {

  const { fullName, nis } = citizen;

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/id/1/200/300"
          alt="citizen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`NIS do cidadão: ${nis}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}