class CountdownTimer {
  constructor(params) {
    this.params = params;
  }

  startPageCount() {
    setInterval(() => {
      let time = this.params.targetDate - Date.now();
      const pageRef = document.querySelector(this.params.selector);
      const pageTimeRef = pageRef.querySelectorAll(".value");

      pageTimeRef[0].textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      pageTimeRef[1].textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      pageTimeRef[2].textContent = Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60)
      );
      pageTimeRef[3].textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
}

const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2023"),
});

// newTimer.startPageCount();
