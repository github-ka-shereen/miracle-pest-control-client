import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';

export const HomeParallaxContact = () => {
  return (
    <div className='flex gap-2 justify-center max-h-[150vh] p-4 bg-fixed bg-parallax bg-cover'>
      <div className='flex flex-col justify-center p-5 xl:p-10 mt-10 mb-10 xl:w-1/2 w-full bg-miracles'>
        <p className='text-white font-bold text-4xl'>Contact Us</p>
        <div className='mt-3 text-black w-full space-y-5 z-10'>
          <div className=''>
            <Label htmlFor='name'>Your Name (Required)</Label>
            <Input
              type='text'
              id='name'
              placeholder='Full Name'
              className='rounded-none'
            />
          </div>
          <div>
            <Label htmlFor='email'>Your Email (Required)</Label>
            <Input
              type='email'
              id='email'
              placeholder='Full Name'
              className='rounded-none'
            />
          </div>
          <div>
            <Label htmlFor='phone_number'>Phone Number</Label>
            <Input
              type='text'
              id='phone_number'
              placeholder='Phone Number'
              className='rounded-none'
            />
          </div>
          <div>
            <Label htmlFor='message'>Select Product/ Service</Label>
            <Select>
              <SelectTrigger className='rounded-none'>
                <SelectValue placeholder='Select Product/ Service' />
              </SelectTrigger>
              <SelectContent className='rounded-none'>
                <SelectItem value='Fumigation'>Fumigation Services</SelectItem>
                <SelectItem value='Pest Control'>Pest Control</SelectItem>
                <SelectItem value='Termite Control'>Termite Control</SelectItem>
                {/* <SelectItem value='Stump Removal'>Stump Removal</SelectItem>
                <SelectItem value='Irrigation/Sprinkler System'>
                  Irrigation/Sprinkler System
                </SelectItem>
                <SelectItem value='Lawn Dressing/Compost/Top Soil etc'>
                  Lawn Dressing/Compost/Top Soil etc
                </SelectItem> */}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor='message'>How may we help you</Label>
            <Textarea
              type='text'
              id='message'
              placeholder='Type your message here...'
              className='rounded-none'
            />
          </div>
          <div>
            <Button
              size='lg'
              className='rounded-none border-2 border-miraclep bg-white text-miraclep hover:bg-miraclep hover:text-white hover:border-white'
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
