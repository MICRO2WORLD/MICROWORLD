let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let MICROWORLD = document.querySelector('MICROWORLD')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 1.75 + 'px'
    mountains3.style.top = value * 1.25 + 'px'
    mountains4.style.top = value * 1.12 + 'px'
    river.style.top = value * 0.5 + 'px'
    boat.style.left = value * 1.25  + 'px'
    boat.style.top = value * 0.5 + 'px'
    MICROWORLD.style.fontSize = value * 1.5 + px

}

const wipe = document.querySelector('.wipe-transition');
const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({

  sync: true,

  transitions: [
    {
      async leave(){

        const done = this.async();

        TLAnim
        .to(allBandes, {height: '100%', stagger: 0.05})

        // TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

        await delay(1500);
        done();

      },
      enter(){

        // TLAnim
        // .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
        // .set(wipe, {left: '-100%'})

        TLAnim
        .to(allBandes, {height: '0%', stagger: 0.05})

      }
    }
  ]

})



