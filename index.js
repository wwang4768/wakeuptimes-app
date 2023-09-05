// JavaScript source code

function handleClick() {
const fallAsleepTime = new Date();
fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
console.log("You will fall sleep at: ", fallAsleepTime.toLocaleTimeString("en-US", {timeStyle:"short"}));

const wakeUpTime = new Date(fallAsleepTime);
const wakeUpTime = []
for (let i = 1; i <= 6; i++) {}
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {timeStyle:"short"})
    // console.log('The first sleep cycle #${i} ends at ${wakeUpTimeString}');
    wakeUpTime.push(wakeUpTimeString)
}

console.log("Wake-up times:", wakeUpTime.join(", "));


    console.log('Bam!');
    window.alert('Boo!')
}
