import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
  const buttonVariants ={
    hover:{
        scale: 1.1 ,
        textShadow:'0px 0px 8px rgb(255,255,255)',
        boxShadow:'0px 0px 8px rgb(255,255,255)',
        transition:{
          duration:0.4,
          yoyo: Infinity
        }
    }
}
const containerVariants ={
  hidden:{
    x:'100vw',
    opacity:0
  },
  visible:{
    opacity:1,
    x:0,
    transition:{type:'spring',delay:0.5}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
        
            whileHover={{scale:1.3 ,originX:0, color:'#f8e112'}}
            transition={{type:'spring',stiffness:300}}
            key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={buttonVariants}
        whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;