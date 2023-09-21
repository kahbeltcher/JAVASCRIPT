const dataAtual = new Date();

const options =  {
  
weekDay
: 'long',
  
year
: "numeric",
  
month
: 'numeric',
  
day
: '2-digit',

};

console.log(dataAtual.toLocaleDateString('en-US', options));