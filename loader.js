function createLoader() {
  if (document.getElementById('loader')) return;

  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <span id="loader-message"></span>
    <div style="margin-top:20px;">
      <i class="fas fa-circle-notch fa-spin" style="font-size:3vw; animation: spin 1.5s infinite linear;"></i>
    </div>
  `;
  document.body.prepend(loader);
}

const messages = [
  "Loading... please wait",
  "boi ts so tuff 😂✌️",
  "unnerfed sakupen circles verified is crazy work 😭",
  "🎵 driving in my car; right after a beer 🎵",
  "i want bocchi season two NOW!",
  "miku, teto, yellow one",
  "have you ever played blox fruits with your life on the line?",
  "🎵 Whoa-oh-oh-oh-oh-oh-oh-oh-oh-oh, Story of Undertale!🎵",
  "please watch saiki k dub im begging 😭😭😭",
  "if my eyes turn run, red! 😈😈",
  "instagram is not for beginners",
  "join the discord!",
  "miku hid in my wifi router, so i burned it.",
  "sata andagi 😀😀",
  "i miss old roblox badly 😭😭",
  "shinji is not da goat 😭✌️",
  "packgod lowkey corny twin 😂✌️",
  "Konata Edition Revamp is finished.",
  "6-7 is not tuff brotato chip 😭✌️",
  "you should listen to 505 by Arctic Monkeys",
  "this is the 20th message. congrats",
  "9.1 Project was my last google site.",
  "is axzyte elite ball knowledge?",
  "gacha life was so peak for its time",
  "we are bringing back i dont gyatt a lot for christmas",
  "horrible time to be a pro athlete and lose a game 😭✌️",
  "tickle me sterling",
  "viggle ai top 3 inventions oat",
  "getting gassied or jeffied?"
  
  
  


];

function showLoaderMessage() {
  const loaderMsg = document.getElementById('loader-message');
  if (loaderMsg) {
    loaderMsg.textContent = messages[Math.floor(Math.random() * messages.length)];
  }
}

window.addEventListener('DOMContentLoaded', () => {
  createLoader();
  showLoaderMessage();
});

window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hide');
      loader.addEventListener('transitionend', () => {
        loader.remove();
      });
    }
  }, 900);
});

