import React, { useEffect } from 'react'
import { animated, useSpring } from 'react-spring';

const Navbar = () => {

    const Boop = ({ rotation = 0, timing = 150, children }) => {

        const [isBooped, setIsBooped] = React.useState(false);
    
        const style = useSpring({
          display: 'block',
          backfaceVisibility: 'hidden',
          transform: isBooped
            ? `rotate(${rotation}deg)`
            : `rotate(0deg)`,
            config: {
              tension: 400,
              friction: 2,
            },
        });
        React.useEffect(() => {
          if (!isBooped) {
            return;
          }
          const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
          }, timing);
          return () => {
            window.clearTimeout(timeoutId);
          };
        }, [isBooped, timing]);
        const trigger = () => {
          setIsBooped(true);
        };
        return (
          <animated.span onMouseEnter={trigger} style={style}>
            {children}
          </animated.span>
        );
      };

  return (
    <nav className="navbar right-2 bottom-2 md:left-4 md:top-1/3">
        <ul className="flex flex-col gap-4 text-xl">
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/twitter.svg" alt="link to twitter" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/discord.svg" alt="link to discord" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/github.svg" alt="link to discord" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/linkedin.svg" alt="link to discord" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/mail.svg" alt="send a mail" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
            <li>
                <Boop rotation={20} timing={300}>
                <a href="">
                    <img src="icons/phone.svg" alt="make a call" className="w-4 md:w-8"/>
                </a>
                </Boop>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar