import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeModal } from '../../slice/modal';
import Button from '../button/Button';
import Input from '../input/Input'

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const dispatch  = useDispatch();

  const sendFunction = (e) => {
    e.preventDefault();

    const chat = `Application from the site :
    %0A - Name: ${name} 
    %0A - Phone Number: ${phone} 
    %0A -Message: ${message} `;

    const token = process.env.REACT_APP_BOT_TOKEN;
    const chat_id = process.env.REACT_APP_CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${chat}`;
    
    if(name === "" && phone === "" ){
      dispatch(changeModal("Please enter a name and phone"))
    }else{
      axios.get(url)
      .then(response => {
        dispatch(changeModal("Successfully sent message"))
        setName("");
        setPhone("");
        setMessage("");
      });
    }




  }



  return (
    <div className='bg-gray-900 p-[20px] d-flex justify-center items-center text-center'>
      <h2 className='text-white font-black lg:text-xl text-lg'>
        Do You Have a Opinion for me ?
      </h2>
      <form className='lg:w-2/4 mx-auto w-full flex flex-wrap gap-3 py-[20px]' onSubmit={sendFunction}>
        <Input placeholder={"Your Name"} state={name} setState={setName} width={"w-full"} />
        <Input placeholder={"Your Phone"} state={phone} setState={setPhone} width={"w-full"} />
        <Input placeholder={"Your Message"} state={message} setState={setMessage} width={"w-full"} />
        <Button>
          Send a Message
        </Button>
      </form>
    </div>
  )
}
