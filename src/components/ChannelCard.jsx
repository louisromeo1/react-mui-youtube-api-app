import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
/* import { demoProfilePicture, demoChannelTitle, demoVideoUrl, demoChannelUrl } from '../utils/constants'; */ 

const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box sx={{ boxShadow: 'none', borderRadius: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '358px', md: '320px' }, height: '326px', margin: 'auto', marginTop: marginTop}}>
      <Link to={channelDetail?.id?.channelId ? `/channel/${channelDetail.id.channelId}` : '#'}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || '' } alt={channelDetail?.snippet?.title} 
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
            <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
)

export default ChannelCard
