import React, { useState, useRef } from 'react';
import { BeanHead } from 'beanheads';
import "./thank.css";

export const Thank = () => {
  const [avatarProps, setAvatarProps] = useState({
    accessory: 'none',
    body: 'breasts',
    circleColor: 'blue',
    clothing: 'vneck',
    clothingColor: 'green',
    eyebrows: 'leftLowered',
    eyes: 'simple',
    faceMask: false,
    faceMaskColor: 'white',
    facialHair: 'none',
    graphic: 'vue',
    hair: 'bob',
    hairColor: 'black',
    hat: 'none2',
    hatColor: 'white',
    lashes: false,
    lipColor: 'purple',
    mask: false,
    mouth: 'serious',
    skinTone: 'yellow',
  });

  const svgRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const propValue = value === "true" || value === "false" ? value === "true" : value;
    setAvatarProps(prevProps => ({
      ...prevProps,
      [name]: propValue,
    }));
  };

  const downloadAvatar = () => {
    const svg = svgRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'avatar.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  

  const randomizeAvatar = () => {
    const accessoryOptions = ['none', 'roundGlasses', 'tinyGlasses', 'shades'];
    const bodyOptions = ['chest', 'breasts'];
    const circleColorOptions = ['blue'];
    const clothingOptions = ['shirt', 'dressShirt', 'vneck', 'tankTop', 'dress'];
    const clothingColorOptions = ['white', 'blue', 'black', 'green', 'red'];
    const eyebrowsOptions = ['raised', 'leftLowered', 'serious', 'angry', 'concerned'];
    const eyesOptions = ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'];
    const faceMaskColorOptions = ['white'];
    const facialHairOptions = ['none', 'none2', 'none3', 'stubble', 'mediumBeard'];
    const graphicOptions = ['none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL'];
    const hairOptions = ['none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob'];
    const hairColorOptions = ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'];
    const hatOptions = ['none', 'none2', 'none3', 'none4', 'none5', 'beanie', 'turban'];
    const hatColorOptions = ['white', 'blue', 'black', 'green', 'red'];
    const lipColorOptions = ['red', 'purple', 'pink', 'turqoise', 'green'];
    const mouthOptions = ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue'];
    const skinToneOptions = ['light', 'yellow', 'brown', 'dark', 'red', 'black'];

    // Randomly select an option for each property
    const randomProps = {
  accessory: accessoryOptions[Math.floor(Math.random() * accessoryOptions.length)],
  body: bodyOptions[Math.floor(Math.random() * bodyOptions.length)],
  circleColor: circleColorOptions[Math.floor(Math.random() * circleColorOptions.length)],
  clothing: clothingOptions[Math.floor(Math.random() * clothingOptions.length)],
  clothingColor: clothingColorOptions[Math.floor(Math.random() * clothingColorOptions.length)],
  eyebrows: eyebrowsOptions[Math.floor(Math.random() * eyebrowsOptions.length)],
  eyes: eyesOptions[Math.floor(Math.random() * eyesOptions.length)],
  faceMask: Math.random() < 0.5, // Random boolean value
  faceMaskColor: faceMaskColorOptions[Math.floor(Math.random() * faceMaskColorOptions.length)],
  facialHair: facialHairOptions[Math.floor(Math.random() * facialHairOptions.length)],
  graphic: graphicOptions[Math.floor(Math.random() * graphicOptions.length)],
  hair: hairOptions[Math.floor(Math.random() * hairOptions.length)],
  hairColor: hairColorOptions[Math.floor(Math.random() * hairColorOptions.length)],
  hat: hatOptions[Math.floor(Math.random() * hatOptions.length)],
  hatColor: hatColorOptions[Math.floor(Math.random() * hatColorOptions.length)],
  lashes: Math.random() < 0.5, // Random boolean value
  lipColor: lipColorOptions[Math.floor(Math.random() * lipColorOptions.length)],
  mask: Math.random() < 0.5, // Random boolean value
  mouth: mouthOptions[Math.floor(Math.random() * mouthOptions.length)],
  skinTone: skinToneOptions[Math.floor(Math.random() * skinToneOptions.length)]
    };

    // Update state with the randomly generated props
    setAvatarProps(randomProps);
  };

  return (
    <div className='container'>
      <div className='avatar-container'>
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 990">
        <g>
      <BeanHead {...avatarProps}/>
      </g>
      </svg>
      </div>
      <h2 className="create-avatar-heading">Create Avatar</h2>
      <div className="button-container">
      <button className="download-button" onClick={randomizeAvatar}>Random</button>
      <button className="download-button" onClick={downloadAvatar}>Download</button>
      </div>
      <div className='controls-container'>
  <label>Accessory:
    <select name="accessory" value={avatarProps.accessory} onChange={handleChange}>
      <option value="none">None</option>
      <option value="roundGlasses">Round Glasses</option>
      <option value="tinyGlasses">Tiny Glasses</option>
      <option value="shades">Shades</option>
    </select>
  </label>

  <label>Body:
    <select name="body" value={avatarProps.body} onChange={handleChange}>
      <option value="chest">Male</option>
      <option value="breasts">Female</option>
    </select>
  </label>

  <label>Circle Color:
    <select name="circleColor" value={avatarProps.circleColor} onChange={handleChange}>
      <option value="blue">Blue</option>
    </select>
  </label>



  <label>Clothing:
    <select name="clothing" value={avatarProps.clothing} onChange={handleChange}>
      <option value="shirt">Shirt</option>
      <option value="dressShirt">Dress Shirt</option>
      <option value="vneck">V-Neck</option>
      <option value="tankTop">Tank Top</option>
      <option value="dress">Dress</option>
    </select>
  </label>

  <label>Clothing Color:
    <select name="clothingColor" value={avatarProps.clothingColor} onChange={handleChange}>
      <option value="white">White</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
    </select>
  </label>

  <label>Eyebrows:
    <select name="eyebrows" value={avatarProps.eyebrows} onChange={handleChange}>
      <option value="raised">Raised</option>
      <option value="leftLowered">Left Lowered</option>
      <option value="serious">Serious</option>
      <option value="angry">Angry</option>
      <option value="concerned">Concerned</option>
    </select>
  </label>

  <label>Eyes:
    <select name="eyes" value={avatarProps.eyes} onChange={handleChange}>
      <option value="normal">Normal</option>
      <option value="leftTwitch">Left Twitch</option>
      <option value="happy">Happy</option>
      <option value="content">Content</option>
      <option value="squint">Squint</option>
      <option value="simple">Simple</option>
      <option value="dizzy">Dizzy</option>
      <option value="wink">Wink</option>
      <option value="heart">Heart</option>
    </select>
  </label>
  <label>Facial Hair:
  <select name="facialHair" value={avatarProps.facialHair} onChange={handleChange}>
    <option value="none">None</option>
    <option value="none2">None 2</option>
    <option value="none3">None 3</option>
    <option value="stubble">Stubble</option>
    <option value="mediumBeard">Medium Beard</option>
  </select>
</label>

<label>Graphic:
  <select name="graphic" value={avatarProps.graphic} onChange={handleChange}>
    <option value="none">None</option>
    <option value="redwood">Redwood</option>
    <option value="gatsby">Gatsby</option>
    <option value="vue">Vue</option>
    <option value="react">React</option>
    <option value="graphQL">GraphQL</option>
  </select>
</label>

<label>Hair:
  <select name="hair" value={avatarProps.hair} onChange={handleChange}>
    <option value="none">None</option>
    <option value="long">Long</option>
    <option value="bun">Bun</option>
    <option value="short">Short</option>
    <option value="pixie">Pixie</option>
    <option value="balding">Balding</option>
    <option value="buzz">Buzz</option>
    <option value="afro">Afro</option>
    <option value="bob">Bob</option>
  </select>
</label>

<label>Hair Color:
  <select name="hairColor" value={avatarProps.hairColor} onChange={handleChange}>
    <option value="blonde">Blonde</option>
    <option value="orange">Orange</option>
    <option value="black">Black</option>
    <option value="white">White</option>
    <option value="brown">Brown</option>
    <option value="blue">Blue</option>
    <option value="pink">Pink</option>
  </select>
</label>

<label>Hat:
  <select name="hat" value={avatarProps.hat} onChange={handleChange}>
    <option value="none">None</option>
    <option value="none2">None 2</option>
    <option value="none3">None 3</option>
    <option value="none4">None 4</option>
    <option value="none5">None 5</option>
    <option value="beanie">Beanie</option>
    <option value="turban">Turban</option>
  </select>
</label>

<label>Hat Color:
  <select name="hatColor" value={avatarProps.hatColor} onChange={handleChange}>
    <option value="white">White</option>
    <option value="blue">Blue</option>
    <option value="black">Black</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
  </select>
</label>

<label>Lashes:
  <select name="lashes" value={avatarProps.lashes} onChange={handleChange}>
    <option value="true">True</option>
    <option value="false">False</option>
  </select>
</label>

<label>Lip Color:
  <select name="lipColor" value={avatarProps.lipColor} onChange={handleChange}>
    <option value="red">Red</option>
    <option value="purple">Purple</option>
    <option value="pink">Pink</option>
    <option value="turqoise">Turqoise</option>
    <option value="green">Green</option>
  </select>
</label>

<label>Mask:
  <select name="mask" value={avatarProps.mask} onChange={handleChange}>
    <option value="true">True</option>
    <option value="false">False</option>
  </select>
</label>

<label>Face Mask:
  <select name="faceMask" value={avatarProps.faceMask.toString()} onChange={handleChange}>
    <option value="true">True</option>
    <option value="false">False</option>
  </select>
</label>

<label>Mouth:
  <select name="mouth" value={avatarProps.mouth} onChange={handleChange}>
    <option value="grin">Grin</option>
    <option value="sad">Sad</option>
    <option value="openSmile">Open Smile</option>
    <option value="lips">Lips</option>
    <option value="open">Open</option>
    <option value="serious">Serious</option>
    <option value="tongue">Tongue</option>
  </select>
</label>

<label>Skin Tone:
  <select name="skinTone" value={avatarProps.skinTone} onChange={handleChange}>
    <option value="light">Light</option>
    <option value="yellow">Yellow</option>
    <option value="brown">Brown</option>
    <option value="dark">Dark</option>
    <option value="red">Red</option>
    <option value="black">Black</option>
  </select>
</label>
</div>
 </div>
  );
};
