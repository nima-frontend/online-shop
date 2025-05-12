'use client'

import { ExpandMore } from '@mui/icons-material';
import  {Accordion , AccordionDetails, AccordionSummary, Typography } from '@mui/material';


export default function AccordionQuestions() {
  return (
    <div className='mb-12'>
          <Accordion className='group' sx={{
      marginInline: 'auto',
      width:'90%',
      borderRadius: '8px',
      marginBottom: '16px',
      boxShadow: '0 2px 10px rgba(31, 45, 61, 0.16)',
      fontFamily:'inherit',
      color:'var(--color-title-primary)',
      '& .MuiTypography-root':{
        fontFamily:'inherit'
      },
      '&.Mui-expanded':{
        marginInline:'auto'
      }
      ,
      '&:before':{
        display:'none'
      }
    }}>
      <AccordionSummary sx={{padding:'0.6rem',
      '& .MuiTypography-root':{
        fontFamily:'inherit',
        fontWeight:'bold'
      },}} expandIcon={<ExpandMore className=' bg-[#f1f3f5] rounded-full group-hover:bg-[var(--color-primary)] group-hover:text-white'/>}>
        <Typography>
        آیا برای خرید لازم است از قبل در وبسایت ثبت‌نام کرده باشم؟
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{padding:'1rem',
      '& .MuiTypography-root':{
        fontWeight:'thin'
      },}} className='bg-[#f9f9f9] border-t border-[#E4E4E4]'>
        <Typography>
        خیر، شما با انتخاب و اضافه کردن محصولات به سبد خریدتان می‌توانید اطلاعات فردی و ارسالتان را کامل کنید و پرداخت را انجام دهید.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion className='group' sx={{
      marginInline: 'auto',
      width:'90%',
      borderRadius: '8px',
      marginBottom: '16px',
      boxShadow: '0 2px 10px rgba(31, 45, 61, 0.16)',
      fontFamily:'inherit',
      color:'var(--color-title-primary)',
      '& .MuiTypography-root':{
        fontFamily:'inherit'
      },
      '&.Mui-expanded':{
        marginInline:'auto'
      }
      ,
      '&:before':{
        display:'none'
      }
    }}>
      <AccordionSummary sx={{padding:'0.6rem',
      '& .MuiTypography-root':{
        fontFamily:'inherit',
        fontWeight:'bold'
      },}} expandIcon={<ExpandMore className=' bg-[#f1f3f5] rounded-full group-hover:bg-[var(--color-primary)] group-hover:text-white'/>}>
        <Typography>
        چطور هزینه سفارش را پرداخت کنم؟
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{padding:'1rem',
      '& .MuiTypography-root':{
        fontWeight:'thin'
      },}} className='bg-[#f9f9f9] border-t border-[#E4E4E4]'>
        <Typography>
        تمامی کاربران می‌توانند از طریق درگاه بانکی با تمام کارت‌های عضو شتاب هزینه سفارش را به صورت اینترنتی پرداخت نمایند.
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
  )
}
