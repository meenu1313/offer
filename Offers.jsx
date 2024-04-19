import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function OfferPage() {
  // <Button
  //     style={{
  //       display: isVisible ? 'flex' : 'none',
  //       position: 'fixed',
  //       bottom: '20px',
  //       right: '20px',
  //       zIndex: 9999
  //     }}
  //     onClick={scrollToTop}
  //     variant="contained"
  //     color="primary"
  //     endIcon={<KeyboardArrowDown />}
  //   >
  //     Scroll to Top
  //   </Button>
  return (
    <div style={{ display: 'flex',  gap: '30px' }}>
     
     <Card sx={{ maxWidth: 900,marginLeft:"110px",marginTop:"50px" }}>
        <CardMedia
          sx={{ height: 300,width:"300px", textAlign: 'center' }}
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-biryani-offer-design-template-65dc5004a103342995dce5028c9de8e1_screen.jpg?ts=1691724794"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Offer 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Limited time offer!.
          </Typography>
        </CardContent>
       
      </Card>

      {/* 2 */}

      <Card sx={{ maxWidth: 900,marginLeft:"50px",marginTop:"50px" }}>
        <CardMedia
          sx={{ height: 300,width:"300px", textAlign: 'center' }}
          image="data:image/jpeg;base64,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"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Offer 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Offer closes soon
          </Typography>
        </CardContent>
       
      </Card>

      {/* 3 */}

  
      <Card sx={{ maxWidth: 900,marginLeft:"50px",marginTop:"50px" }}>
        <CardMedia
          sx={{ height: 300,width:"300px", textAlign: 'center' }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSwJjpc5KNmcu-gU61U7CK769gnWtGOO2HF0KhAV5tEOZYVrRpi3fsWh_9shCRu2z98o&usqp=CAU"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Offer 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Limited time offer!.
          </Typography>
        </CardContent>
       
      </Card>
    </div>
  );
}
