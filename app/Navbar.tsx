import { Flex } from '@radix-ui/themes'
import React from 'react'
import { FaQuoteRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex p="6" className='max-w-7xl mx-auto' px="5" justify={"between"} align={"center"}>
        <Flex align={"center"} gap="3" className='text-xl'>
            <FaQuoteRight />
            <span className='font-bold'>
                Quotes
            </span>
        </Flex>
    </Flex>
  )
}

export default Navbar