import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';


function Shopping(){


  const costumeInformation = [
    {details: 'Adult Wicked Witch Halloween Costume' , price: '£35.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Adult DC Wonder Woman Costume' , price: '£40.99' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Teal Medieval Princess costume' , price: '£23.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Women Deluxe Toga Costume' , price: '£42.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Adult Sized Traditional Alice Costume' , price: '£31.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Womens Leather Look Catsuit Costume' , price: '£36.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Adult Unisex Yoshi Costume' , price: '£27.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Men Scary Clown Costume' , price: '£32.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Men Mad Hatter Costume' , price: '£35.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Men Roman Warrior Costume' , price: '£33.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Adult Classic Batman Costume' , price: '£28.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Adult The Shining Costume Twin' , price: '£30.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Marvel Spiderman Costume' , price: '£25.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Twinkle Witch Costume' , price: '£22.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Harley Quinn Costume' , price: '£21.00' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Cheerleader Costume' , price: '£19.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Unisex Police Officer Costume' , price: '£21.50' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'},
    {details: 'Child Pirate Costume' , price: '£24.30' , image: 'https://hips.hearstapps.com/hmg-prod/images/diy-witch-costumes-1-1629149157.jpeg?crop=0.668xw:1.00xh;0.284xw,0&resize=980:*'}
  ];

  const costumes = costumeInformation.map((costume, index) => (
    <div className='costume-card' key={index}>
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

  const[filterIsActive, setFilterIsActive] = useState(false);
  const[costumesAToZ, setCostumesAToZ] = useState(costumeInformation);

  function handleFormClick(event){
    // console.log(event);
    setFilterIsActive(!filterIsActive);
  }

  function handleSortAToZ(event){
    // when clicked sort each costume-cards costume.details from A to Z using sort()

    const detailsAscending = costumeInformation.sort((a, b) => a.details.localeCompare(b.details));

    setCostumesAToZ(detailsAscending);
  }

  return(
    <div id="shopping">

      <div className="shopping-opening">
       <span className="title-wrapper"><img className="cobweb-1" src="images/cobweb.png" alt="cobweb" /> <h2>Halloween Costumes</h2> <img className="cobweb-2" src="images/cobweb.png" alt="cobweb" /></span>
        <h4 className="shopping-intro">Welcome to Frightful Fashion, your gateway to Halloween enchantment! Dive into our vast collection of costumes that cater to all ages, ensuring everyone can revel in the spine-tingling fun of this haunted holiday. From little monsters to seasoned spooksters, discover the perfect attire to unleash your inner ghouls and ghosts. Whether you're trick-or-treating with the kids or haunting the night away, Frightful Fashion has you covered. Embrace the spirit of Halloween in style!</h4>
      </div>

      <div className="sort">
        <ul>
          <li onClick={handleFormClick} className="sort-title"><FontAwesomeIcon icon={faSort}/> Sort <FontAwesomeIcon icon={faChevronDown}/></li>
          <div className={filterIsActive === true ? 'sort-content' : 'hide-sort'}>
            <li>PRICE LOW TO HIGH</li>
            <li>PRICE HIGH TO LOW</li>
            <li onClick={handleSortAToZ}>SORT A - Z</li>
            <li>SORT Z - A</li>
          </div>
        </ul>
      </div>

      <div className='content-wrapper'>
        {costumes}
      </div>



    </div>
  )
}

export default Shopping;
