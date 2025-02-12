const BG = () => {
    return ( 
        <div id="headerBG" className="fixed m-0 p-0">
        <img
          src="src/assets/img/headerBG.webp"
          srcSet="
            src/assets/img/headerBGtablet.webp 768w,
            src/assets/img/headerBGLaptop.webp 1024w,
            src/assets/img/headerBG.webp 1920w"
          sizes="(max-width: 480px) 480px,
         (max-width: 768px) 768px,
         (max-width: 1024px) 1024px,
         1920px"
          alt="background image"
          id="mountain"
          className="absolute h-screen w-full object-cover z-10"
        />
        <div className="circle absolute linear z-0"></div>
      </div>
     );
}
 
export default BG;