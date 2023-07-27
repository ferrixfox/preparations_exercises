function extractLanguage(code){
  return code.slice(0,2);
}

function extractRegion(code){
  return code.split("_")[1].split(".")[0]; 
}

function localGreet(code){
  let language = extractLanguage(code);
  let country = extractRegion(code);
  greet(country, language);
  
}

function greet(country, lang){
  switch (lang){
    case 'en':
      if(country === 'US') console.log('Hey!');
      else if (country === 'GB') console.log('Hello!')
      else if (country === 'AU') console.log('Howdy!')
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
    console.log('Hej!');
    break;
    case 'af':
      console.log('Haai!')
      break;
    default :
      console.log("I don't know that language yet.");
      break;
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'