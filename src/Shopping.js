import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';


function Shopping(){

  const costumeInformation = [
    {details: 'Adult Wicked Witch Halloween Costume' , price: '35.50' , image: 'https://www.fancydress.com/cdn/shop/products/00097446p_800x.png?v=1648779226'},
    {details: 'Adult DC Wonder Woman Costume' , price: '60.99' , image: 'https://www.fancydress.com/cdn/shop/products/00095353p_800x.png?v=1683022151'},
    {details: 'Child Disney Tangled Costume' , price: '17.50' , image: 'https://www.fancydress.com/cdn/shop/products/kids-disney-rapunzel-tangled-plus-costume-201847_800x.png?v=1686631685'},
    {details: 'Women Deluxe Empress Costume' , price: '62.50' , image: 'https://www.fancydress.com/cdn/shop/products/00097893p_800x.png?v=1625794414'},
    {details: 'Adult Sized Traditional Alice Costume' , price: '31.50' , image: 'https://images.esellerpro.com/2372/I/290/089/(9910043)_991021_1500.jpg'},
    {details: 'Womens Barbie Cowboy' , price: '69.99' , image: 'https://www.fancydress.com/cdn/shop/products/adult-barbie-cowgirl-movie-costume-334254_800x.png?v=1695431870'},
    {details: 'Adult Unisex Yoshi Costume' , price: '27.00' , image: 'https://i.ebayimg.com/images/g/oJMAAOSwOYRbvSyv/s-l1200.jpg'},
    {details: 'Men Scary Clown Costume' , price: '42.50' , image: 'https://www.fancydress.com/cdn/shop/products/mens-scary-clown-costume-353484_800x.png?v=1662232342'},
    {details: 'Men Mad Hatter Costume' , price: '35.00' , image: 'https://images.halloweencostumes.co.uk/products/1942/1-1/deluxe-plus-size-mad-hatter-costume.jpg'},
    {details: 'Men Roman Warrior Costume' , price: '73.50' , image: 'https://www.fancydress.com/cdn/shop/products/mens-roman-gladiator-costume-824368_800x.png?v=1631722336'},
    {details: 'Adult Classic Batman Costume' , price: '28.50' , image: 'https://m.media-amazon.com/images/I/71yyGmBSZPL.jpg'},
    {details: 'Adult The Shining Costume Twin' , price: '34.00' , image: 'https://www.fancydress.com/cdn/shop/files/00095664p_800x.png?v=1693011844'},
    {details: 'Child Marvel Spiderman Costume' , price: '20.00' , image: 'https://images-eu.ssl-images-amazon.com/images/I/71FKnyDd--L._AC_UL600_SR600,600_.jpg'},
    {details: 'Child Twinkle Witch Costume' , price: '13.50' , image: 'https://timetodressup.co.uk/cdn/shop/products/Spellcastingcutie2-toodler_800x.jpg?v=1659697950'},
    {details: 'Child Harley Quinn Costume' , price: '19.99' , image: 'https://www.fancydress.com/cdn/shop/products/00035350p_800x.png?v=1678501535'},
    {details: 'Child Cheerleader Costume' , price: '18.50' , image: 'https://m.media-amazon.com/images/I/61GGtfjQe-S._AC_UY580_.jpg'},
    {details: 'Child Unisex Fire Brigade Costume' , price: '16.50' , image: 'https://johnlewis.scene7.com/is/image/JohnLewis/239831842?$rsp-pdp-port-640-82$'},
    {details: 'Child Pirate Costume' , price: '15.30' , image: 'https://johnlewis.scene7.com/is/image/JohnLewis/237079178alt2?$rsp-pdp-port-640-82$'}
  ];

  const[sortIsActive, setSortIsActive] = useState(false);
  const[costumesAToZ, setCostumesAToZ] = useState(costumeInformation);
  const[costumesZToA, setCostumesZToA] = useState(costumeInformation);
  const[costumesLowToHigh, setCostumesLowToHigh] = useState(costumeInformation);
  const [costumesHighToLow, setCostumesHighToLow] = useState(costumeInformation);
  const [isSortedAToZ, setIsSortedAToZ] = useState(false);
  const [isSortedZToA, setIsSortedZToA] = useState(false);
  const [isSortedLowToHigh, setIsSortedLowToHigh] = useState(false);
  const [isSortedHighToLow, setIsSortedHighToLow] = useState(false);

  function handleFormClick(event){
    // console.log(event);
    setSortIsActive(!sortIsActive);
    setIsSortedAToZ(false);
  }

  function handleSortAToZ(event){
    // COSTUME CARDS SORTED A TO Z
    const sortedCostumesAToZ = [...costumesAToZ];

    sortedCostumesAToZ.sort((a, b) => {
      const costumeA = a.details.toLowerCase();
      const costumeB = b.details.toLowerCase();

      if(costumeA < costumeB){
        return -1;
      };
      if(costumeA > costumeB){
        return 1;
      }
      return 0;
    });

    setCostumesAToZ(sortedCostumesAToZ);
    setIsSortedAToZ(true);
    // console.log(costumesAToZ);
    setSortIsActive(false);
  }

  function handleSortZToA(event){
    // COSTUME CARDS SORTED Z TO A
    const sortedCostumesZToA = [...costumesZToA];

    sortedCostumesZToA.sort((a, b) => {
      const costumeA = a.details.toLowerCase();
      const costumeB = b.details.toLowerCase();

      if(costumeA > costumeB){
        return -1;
      };
      if(costumeA < costumeB){
        return 1;
      }
      return 0;
    });

    setCostumesZToA(sortedCostumesZToA);
    setIsSortedZToA(true);
    setIsSortedAToZ(false);
    setSortIsActive(false);
  }

  function handleSortLowToHigh(event){
    // console.log(event);
    // COSTUME CARDS SORTED LOWEST TO HIGHEST PRICE

    const sortedCostumesLowToHigh = [...costumesLowToHigh];

    sortedCostumesLowToHigh.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceA - priceB;
    })

    setCostumesLowToHigh(sortedCostumesLowToHigh);
    setIsSortedLowToHigh(true);
    setIsSortedAToZ(false);
    setIsSortedZToA(false);
    setSortIsActive(false);
  }


  function handleSortHighToLow(event){
    // console.log(event);
    // COSTUME CARDS SORTED HIGHEST TO LOWEST PRICE

    const sortedCostumesHighToLow = [...costumesHighToLow];

    sortedCostumesHighToLow.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return priceB - priceA;
    })

    setCostumesHighToLow(sortedCostumesHighToLow);
    setIsSortedHighToLow(true);
    setIsSortedAToZ(false);
    setIsSortedZToA(false);
    setIsSortedLowToHigh(false);
    setSortIsActive(false);
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
          <div className={sortIsActive === true ? 'sort-content' : 'hide-sort'}>
            <li onClick={handleSortLowToHigh}>PRICE LOW TO HIGH</li>
            <li onClick={handleSortHighToLow}>PRICE HIGH TO LOW</li>
            <li onClick={handleSortAToZ}>SORT A - Z</li>
            <li onClick={handleSortZToA}>SORT Z - A</li>
          </div>
        </ul>
      </div>
      <br/><br/><br/><br/>

      {isSortedAToZ ? (
        <div className='content-wrapper'>
          {costumesAToZ.map((costume, index) => (
            // SORTED A TO Z
            <div className='costume-card' key={index}>
              <img className='card-img' src={costume.image} alt={costume.details} />
              <div className='card-content'>
                <h3 className='card-details'>{costume.details}</h3>
                <div className='card-wrap'>
                  <p className='card-price'>£{costume.price}</p>
                  <span className='cart-btn'>Add to cart</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isSortedZToA ? (
        <div className='content-wrapper'>
          {costumesZToA.map((costume, index) => (
            // SORTED Z TO A
            <div className='costume-card' key={index}>
              <img className='card-img' src={costume.image} alt={costume.details} />
              <div className='card-content'>
                <h3 className='card-details'>{costume.details}</h3>
                <div className='card-wrap'>
                  <p className='card-price'>£{costume.price}</p>
                  <span className='cart-btn'>Add to cart</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isSortedLowToHigh ? (
        <div className='content-wrapper'>
          {costumesLowToHigh.map((costume, index) => (
            // SORTED LOWEST TO HIGHEST
            <div className='costume-card' key={index}>
              <img className='card-img' src={costume.image} alt={costume.details} />
              <div className='card-content'>
                <h3 className='card-details'>{costume.details}</h3>
                <div className='card-wrap'>
                  <p className='card-price'>£{costume.price}</p>
                  <span className='cart-btn'>Add to cart</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isSortedHighToLow ? (
        <div className='content-wrapper'>
        {costumesHighToLow.map((costume, index) => (
          // SORTED HIGHEST TO LOWEST
          <div className='costume-card' key={index}>
            <img className='card-img' src={costume.image} alt={costume.details} />
            <div className='card-content'>
              <h3 className='card-details'>{costume.details}</h3>
              <div className='card-wrap'>
                <p className='card-price'>£{costume.price}</p>
                <span className='cart-btn'>Add to cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      ) : (
        <div className='content-wrapper'>
          {costumeInformation.map((costume, index) => (
            // ORIGINAL
            <div className='costume-card' key={index}>
              <img className='card-img' src={costume.image} alt={costume.details} />
              <div className='card-content'>
                <h3 className='card-details'>{costume.details}</h3>
                <div className='card-wrap'>
                  <p className='card-price'>£{costume.price}</p>
                  <span className='cart-btn'>Add to cart</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}



    </div>
  )
}

export default Shopping;
