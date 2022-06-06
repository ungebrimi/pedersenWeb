import React from 'react'

const GoingFurther = () => {

  return (
    <div className="max-w-3xl text-left py-spacersm md:py-spacermd lg:py-spacerlg">
        <h2 className="mb-8 text-subtitlesm md:text-subtitlemd lg:text-subtitlelg">What is WebGL</h2>
        <div className="text-bodysm md:text-bodymd lg:text-bodylg">
          <p className="">
            WebGL (Short for Web Graphics Library) is a JavaScript API 
            for rendering interactive 2D and 3D graphics within any compatible web browser 
            without the use of plug-ins. WebGL is fully integrated with other web standards, 
            allowing GPU-accelerated usage of physics and image processing and effects as part of the web page 
            canvas.
            <br />
            <br />
            WebGL is commonly used across all fields online. You can use it to make a 3D world
            like in a game, that you can explore and interact with. It's also used to create immersive experiences,
            to showcase your product and much more.
            You can find some great examples of different scene over at <a href="https://threejs.org" className="cursor-pointer border-b-2">Three.js</a> homepage
          </p>
        </div>
    </div>
  )
}

export default GoingFurther