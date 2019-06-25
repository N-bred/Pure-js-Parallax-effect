/**
 * randomNumber returns the exp argument
 * plus a value between 1 to 9 as a float
 */

const randomNumber = exp => {
   const random = Math.floor(Math.random() * 9);
   const speed = Number(`${exp}.${random}`);
   return speed;
};

// The class Balls creates a ball element with a the properties
// Described in the constructor
class Balls {
   constructor(color = '#000', heightAndWidth = 100, top = 0, left = 0) {
      this.color = color;
      this.heightAndWidth = heightAndWidth;
      this.top = top;
      this.left = left;
      this.y = null;
      this.x = null;
      this.setTranslateY();
      this.setTranslateX();
   }

   // makeBall returns a span element with all the properties set

   makeBall() {
      const ball = document.createElement('span');
      ball.classList.add('ball');
      ball.style.background = this.color;
      ball.style.height = `${this.heightAndWidth}px`;
      ball.style.width = `${this.heightAndWidth}px`;
      ball.style.top = `${this.top}px`;
      ball.style.left = `${this.left}px`;
      return ball;
   }

   // Sets a value for he the Y axis

   setTranslateY() {
      this.y = randomNumber(1);
   }
   // Sets a value for the x axis

   setTranslateX() {
      this.x = randomNumber(1);
   }
}

// Function that returns a hex color value.
const randomHex = () => {
   const randomColor = '#000000'.replace(/0/g, () =>
      (~~(Math.random() * 16)).toString(16)
   );
   return randomColor;
};

// Selector for the root element in the page in which all balls
// Will be appended

const rootEl = document.getElementById('root');

// For loop to create al balls

for (let i = 0; i <= 100; i++) {
   // Random const sets the width and height of the ball
   const random = Math.floor(Math.random() * 100 * 2);

   // Instantiating the balls
   const ball = new Balls(
      randomHex(),
      random,
      rootEl.offsetHeight * randomNumber(0),
      rootEl.offsetWidth * randomNumber(0)
   );

   const ballEl = ball.makeBall();

   // Appending ball element to the root element
   rootEl.appendChild(ballEl);

   // Random number between 1 and 360
   const deg = Math.floor(Math.random() * 360);

   // Event listner to scroll event on window.
   window.addEventListener('scroll', function() {
      // Actual scroll position.
      const { pageYOffset } = this;

      // Controls the movement of the balls between axis.
      const rateY = pageYOffset * ball.y;
      const rateX = pageYOffset * ball.x;

      // Applies the tranform property to the ball elements.
      ballEl.style.transform = `rotate(${-deg}deg)  translate3d(${rateX}px, ${rateY}px, ${rateY}px)`;
   });
}
