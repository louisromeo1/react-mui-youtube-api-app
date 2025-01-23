import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';


const Videos = ({ videos, direction }) => {

  if(!videos.length) return 'Loading...';

  return (
    <Stack direction={ direction || 'row' } flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.filter((item) => (item.id?.videoId || item.id?.channelId) && item.snippet).map((item, idx) => (
        <Box key={idx} sx={{width: { xs: '100%', sm: '358px', md: '300px' }}}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
