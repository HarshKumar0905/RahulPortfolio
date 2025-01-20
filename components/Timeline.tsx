import * as React from 'react';

import Timeline from '@mui/lab/Timeline'; 
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const CustomTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem className='flex justify-center -translate-x-[16.51%] translate-y-[14%]'>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <div className='text-light-2'>2021 - 2025</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="div">
            <div className='flex items-center'>
              <img src="/assets/NITD.webp" alt="Image not found" className="rounded-sm w-10 h-10"/>
              <div className='text-light-2'>
                <a target="_blank" href="https://nitdgp.ac.in/">National Institute of Technology, Durgapur</a>
              </div>
            </div>
          </Typography>
          <Typography>
            <div className='text-light-2'>B.Tech, Electronics and Communication Engineering</div>
            <div className='text-light-2'>• CGPA : 9.17</div>
        </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <div className='text-light-2'>2019 - 2021</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="div">
            <div className='flex items-center translate-x-[37%]'>
              <img src="/assets/DPS.png" alt="Image not found" className="rounded-sm w-10 h-10"/>
              <div className='text-light-2'>
                <a target="_blank" href="https://dpsbokaro.schoolerp.org/home.html">Delhi Public School, Bokaro</a>
              </div>
            </div>
          </Typography>
          <Typography>
            <div className='text-light-2'>All India Senior School Certificate Examination (AISSCE) </div>
            <div className='text-light-2'>• CGPA : 98.4%</div>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <div className='text-light-2'>2017 - 2019</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="div">
            <div className='flex items-center'>
              <img src="/assets/assembly.jpg" alt="Image not found" className="rounded-sm w-10 h-10 mr-2"/>
              <div className='text-light-2'>
                <a target="_blank" href="https://agcschools.edu.in/">The Assembly of God Church School, Purulia</a>
              </div>
            </div>
          </Typography>
          <Typography>
            <div className='text-light-2'>All India Secondary School Examination (AISSE) </div>
            <div className='text-light-2'>• CGPA: 96.6%</div>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomTimeline;
