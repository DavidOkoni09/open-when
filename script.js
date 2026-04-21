const letters = {
    'first-time': "<h2>Hello My Lovely Osuwake,</h2><p>I wanted to give you something that lasts longer than a birthday. These letters are my way of being there when I'm not actually there. N/B You have to wait till the tag applies before you can open any of them, okay. 😊</p>",
    'miss-me': "<h2>Hey Victory,</h2><p>Well you might be opening this one a lot 🥹. And damnnn I miss you sooo much as well. I miss your laugh, I miss your presence, the way you look when your focused, I miss that look in your eye that lets me know you're happy, I miss holding your hand, I miss disturbing you (ehem  side eye), I miss your beauty, the bites and hugs, I miss your VOICE, the way i feel when I'm with you, I miss you laying on my leg, I could go on an on but you probably get it. I hope you're smiling at this point else you bet I'm crying. I love youuu. Even when we're apart, remember that you're always in my thoughts. Close your eyes and think of our favorite memory...</p>",
    'stressed': "<h2>Take a breath...</h2><p>If you're opening this it means you had a long, stressful day. I know how hard you work, I've seen it first hand. And I'm sooo very proud of you for finishing what you start and not giving up. You are capable, strong, and you've handled everything life has thrown at you so far. I'm so proud of you. Remember all the time you've worked at stuff, scared but consistent; exams, chores, club activities. I remember all of em and I've always looked at you in awe and pride hehe. Your most definitely the smartest person I know. So go buy a snack and and next time we meet its on me, okay.</p>",
    'disagreement': "<h2>I'm sorry.</h2><p>Our bond is bigger than any argument. Let's talk it through because I value you more than being 'right'.</p>",
    'insecure': `
        <h2>HEY YOU!!! my beautiful girl</h2>
        <p>If you're looking in the mirror and doubting what you see, or if you're doubting your worth—stop. Let me tell you what I see.</p>
        <p>I see a woman who is incredibly beautiful, intelligent, and kind. You have a way of making everything better just by being there. You don't need to be "perfect", for me; you are already everything I’ve ever wanted. You are enough, Victory. Always.</p>
    `,
    'proud': `
        <h2>Yesss! I knew you could do it! 🥂</h2>
        <p>Whether you just aced a test, finished a tough day, or finally figured out that one thing that was bothering you—I am SO proud of you.</p>
        <p>You work so hard, and seeing your success makes me the happiest man alive. Take a moment to celebrate yourself. You deserve it!</p>
    `,
    'hug': `
        <h2>A Virtual Hug (Hold for 5 seconds) 🫂</h2>
        <p>I wish I could wrap my arms around you right now. Since I can’t, I want you to wrap your arms around yourself, close your eyes, and imagine me squeezing you tight.</p>
        <p>I’m sending you all my warmth and energy. Stay there for a moment. I’ve got you, Little dove.</p>
    `,
    'how-much': `
        <h2>The Impossible Question ♾️</h2>
        <p>You asked for a measurement, but I'm an engineer—and some things are just mathematically infinite.</p>
        <p>I love you more than there are lines of code in this site, more than there are stars over Calabar, and more than I love getting a complex structural calculation right on the first try. You are my greatest 'project' and my favorite person.</p>
    `,
    'seizure': `
        <h2>Hey my strong girl</h2>
        <p>If you're reading this one then, its probably one of those moments I want to badly hold your hand and kiss you're forehead and just let you know I love you and you're okay.</p>
        <p>I want you to think of my hand over yours, call me or text me, no matter how late. I would always have time for the brightest person in my life (YOU). I LOVE YOU💖💖</p>
    `,
    'birthday': `
        <h2>Happy birthday baby</h2>
        <p>Its finally your birthday and truth be told I've been anticipaing it more than youu have. Happy birthday my love.</p>
        <a href="https://osuwake.netlify.app/" target="_blank" class="letter-link">Click to open Birthday Gift</a>
    `
};

function openLetter(theme) {
    const modal = document.getElementById("letterModal");
    const content = document.getElementById("letterText");

    if(theme === 'birthday') {
        const today = new Date();
        // Set the birthday: Year, Month (0-11), Day
        // Remember: April is month 3 in JS (0=Jan, 1=Feb, 2=Mar, 3=Apr)
        const birthday = new Date(2026, 6, 26);

        if (today < birthday) {
            alert("Nice try, Victory! ❤️ This one only opens on your actual birthday. Patience is a virtue!");
            return; // Stops the function from opening the modal
        }
    }

    content.innerHTML = letters[theme];
    modal.style.display = "block";
}

function closeLetter() {
    document.getElementById("letterModal").style.display = "none";
}

// Close if they click outside the box
window.onclick = function (event) {
    let modal = document.getElementById("letterModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// SET YOUR ANNIVERSARY DATE HERE (Year, Month (0-11), Day)
// Note: January is 0, February is 1, etc.
const startDate = new Date("2025-11-07T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate; // Difference in milliseconds

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
}

// Update the counter every minute
setInterval(updateCounter, 60000);
updateCounter(); // Run once immediately