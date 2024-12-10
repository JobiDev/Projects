let press_count = 0;

let wrapperDiv = document.createElement('div');
wrapperDiv.innerHTML += `
    <style>
    .keypress_holder {
        padding: 10px;
        position: absolute;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
    }
    .keypress_holder * {
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
    .keypress_button {
        height: 50px;
        width: 50px;
        margin: 5px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    </style>
    `;

wrapperDiv.innerHTML += `
    <div id="keypress_holder" class="keypress_holder">
        <div style="width: 100%; text-align: left;">
            <h3 id="keypresses" style="border-radius: 20px; padding: 3px;">
                Key Presses: 0
            </h3>
        </div>
        <div id="keypress_up" class="keypress_button"> UP </div>
        <div style="display: flex;">
            <div id="keypress_left" class="keypress_button"> LEFT </div>
            <div id="keypress_down" class="keypress_button"> DOWN </div>
            <div id="keypress_right" class="keypress_button"> RIGHT </div>
        </div>
    </div>
    `;
document.body.appendChild(wrapperDiv);

let holder = document.getElementById('keypress_holder');
let totalpresses = document.getElementById('keypresses');
let up = document.getElementById('keypress_up');
let down = document.getElementById('keypress_down');
let left = document.getElementById('keypress_left');
let right = document.getElementById('keypress_right');

let styledelems = [up, down, left, right, totalpresses];

styledelems.forEach((elem) => {
    elem.style.backgroundColor = config.button_style.background_color;
    elem.style.color = config.font.font_color;
    elem.style.fontFamily = config.font.font_family;
});

holder.style.backgroundColor = config.background_color;

window.addEventListener('keydown', (e) => {
    for (let i = 0; i < config.buttons.length; i++) {
        if (e.key === config.buttons[i].character) {
            press_count += 1;
            totalpresses.textContent = "Key Presses: " + press_count;
            styledelems[i].style.backgroundColor = config.button_style.press_color;
        }
    }
});

window.addEventListener('keyup', (e) => {
    for (let i = 0; i < config.buttons.length; i++) {
        if (e.key === config.buttons[i].character) {
            styledelems[i].style.backgroundColor = config.button_style.background_color;
        }
    }
});
