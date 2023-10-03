
function Shopping(){

  const costumeInformation = [
    {details: 'Wicked Witch Halloween costume' , price: '£35.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Wicked Witch Halloween costume' , price: '£35.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Wicked Witch Halloween costume' , price: '£35.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'}
  ];

  const costumes = costumeInformation.map((costume) => (
    <div className='costume-card'>
          <img className='card-img' src={costume.image} alt={costume.details}/>
          <div className='card-content'>
            <h3 className='card-details'>{costume.details}</h3>
            <div className='card-wrap'>
              <p className='card-price'>{costume.price}</p>
              <span className='cart-btn'>Add to cart</span>
            </div>
          </div>
        </div>
  ));

  return(
    <div id="shopping">

      <div className='content-wrapper'>
        {costumes}
      </div>



    </div>
  )
}

export default Shopping;
