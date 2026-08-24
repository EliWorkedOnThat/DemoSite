const color_pallete = new Map();
color_pallete.set("blue", "#4A6FA5");
color_pallete.set("light blue", "#A9C6E8");
color_pallete.set("vibrant blue", "#2563EB");
color_pallete.set("dark blue", "#1E3A8A");
color_pallete.set("sky blue", "#4FA3D1");
color_pallete.set("light sky blue", "#B8DDF0");
color_pallete.set("cyan", "#06B6D4");
color_pallete.set("bright cyan", "#00E5FF");
color_pallete.set("teal", "#5FA8A0");
color_pallete.set("light teal", "#B7DED8");
color_pallete.set("vibrant teal", "#0D9488");
color_pallete.set("dark teal", "#115E59");
color_pallete.set("green", "#7BA05B");
color_pallete.set("light green", "#C3DFB0");
color_pallete.set("vibrant green", "#22C55E");
color_pallete.set("dark green", "#166534");
color_pallete.set("lime", "#84A94D");
color_pallete.set("light lime", "#D5E6B0");
color_pallete.set("vibrant lime", "#84CC16");
color_pallete.set("bright lime", "#A3E635");
color_pallete.set("mint", "#82B89F");
color_pallete.set("light mint", "#C7E1D2");
color_pallete.set("vibrant mint", "#10B981");
color_pallete.set("dark mint", "#047857");
color_pallete.set("gold", "#D9B65C");
color_pallete.set("light gold", "#F0DFA8");
color_pallete.set("vibrant gold", "#EAB308");
color_pallete.set("dark gold", "#A16207");
color_pallete.set("yellow", "#D4B84F");
color_pallete.set("light yellow", "#F4E5A8");
color_pallete.set("vibrant yellow", "#FACC15");
color_pallete.set("bright yellow", "#FDE047");
color_pallete.set("orange", "#D98D4C");
color_pallete.set("light orange", "#F2C9A0");
color_pallete.set("vibrant orange", "#F97316");
color_pallete.set("dark orange", "#C2410C");
color_pallete.set("peach", "#DFA07D");
color_pallete.set("light peach", "#F2CDBB");
color_pallete.set("vibrant peach", "#FB923C");
color_pallete.set("bright peach", "#FDBA74");
color_pallete.set("coral", "#D97D6C");
color_pallete.set("light coral", "#F2BFB4");
color_pallete.set("vibrant coral", "#F43F5E");
color_pallete.set("dark coral", "#BE123C");
color_pallete.set("red", "#C96B63");
color_pallete.set("light red", "#EFB8B3");
color_pallete.set("vibrant red", "#EF4444");
color_pallete.set("dark red", "#991B1B");
color_pallete.set("pink", "#D97CA0");
color_pallete.set("light pink", "#F2C6DA");
color_pallete.set("vibrant pink", "#EC4899");
color_pallete.set("bright pink", "#F472B6");
color_pallete.set("rose", "#C97878");
color_pallete.set("light rose", "#E9B9B9");
color_pallete.set("vibrant rose", "#E11D48");
color_pallete.set("dark rose", "#9F1239");
color_pallete.set("purple", "#8C6FB0");
color_pallete.set("light purple", "#CBB8E3");
color_pallete.set("vibrant purple", "#A855F7");
color_pallete.set("dark purple", "#6B21A8");
color_pallete.set("violet", "#9068A8");
color_pallete.set("light violet", "#D0B9DC");
color_pallete.set("vibrant violet", "#8B5CF6");
color_pallete.set("bright violet", "#C084FC");
color_pallete.set("indigo", "#6A5ACD");
color_pallete.set("light indigo", "#BFB8ED");
color_pallete.set("vibrant indigo", "#6366F1");
color_pallete.set("dark indigo", "#3730A3");
color_pallete.set("lavender", "#9C8CC4");
color_pallete.set("light lavender", "#D2C9E6");
color_pallete.set("vibrant lavender", "#A78BFA");
color_pallete.set("dark lavender", "#7C3AED");
color_pallete.set("plum", "#765579");
color_pallete.set("light plum", "#BFA5C1");
color_pallete.set("vibrant plum", "#9333EA");
color_pallete.set("dark plum", "#581C87");
color_pallete.set("brown", "#98704F");
color_pallete.set("light brown", "#D2B79D");
color_pallete.set("vibrant brown", "#A16207");
color_pallete.set("dark brown", "#713F12");
color_pallete.set("terracotta", "#C97B63");
color_pallete.set("light terracotta", "#E9BBAA");
color_pallete.set("vibrant terracotta", "#E76F51");
color_pallete.set("dark terracotta", "#9A3412");
color_pallete.set("sand", "#B7A27A");
color_pallete.set("light sand", "#E0D5BD");
color_pallete.set("vibrant sand", "#D4A373");
color_pallete.set("dark sand", "#8B6F47");
color_pallete.set("slate", "#697681");
color_pallete.set("light slate", "#B9C2C8");
color_pallete.set("vibrant slate", "#475569");
color_pallete.set("dark slate", "#1E293B");
color_pallete.set("gray", "#858585");
color_pallete.set("light gray", "#D6D6D6");
color_pallete.set("vibrant gray", "#64748B");
color_pallete.set("dark gray", "#374151");
color_pallete.set("charcoal", "#4F5558");
color_pallete.set("light charcoal", "#AEB3B5");
color_pallete.set("dark charcoal", "#27272A");
color_pallete.set("black", "#303234");
color_pallete.set("soft black", "#55585A");
color_pallete.set("true black", "#000000");
color_pallete.set("white", "#FFFFFF");
color_pallete.set("off white", "#F5F3EE");
color_pallete.set("cream", "#F3EED9");
color_pallete.set("ivory", "#F1EEE6");

const colorValues = Array.from(color_pallete.values());
const colorNames = Array.from(color_pallete.keys());
let colorIndex = 0;

const layer1 = document.getElementById("layer1");
const layer2 = document.getElementById("layer2");
layer1.style.backgroundColor = colorValues[colorIndex];
layer1.style.zIndex = 1;
layer2.style.zIndex = 2;
layer2.style.transform = "translateX(100%)";
let activeLayer = layer1;
let incomingLayer = layer2;

const TRANSITION_MS = 500; 
let isTransitioning = false;

function applyColor(index, direction = 1) {
    isTransitioning = true;
    incomingLayer.style.transition = "none";
    incomingLayer.style.transform = `translateX(${direction * 100}%)`;
    incomingLayer.style.backgroundColor = colorValues[index];
    void incomingLayer.offsetWidth;
    incomingLayer.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
    incomingLayer.style.transform = "translateX(0)";
    console.log(`Color: ${colorNames[index]} (${colorValues[index]}), index: ${index}`);
    const oldActive = activeLayer;
    activeLayer = incomingLayer;
    incomingLayer = oldActive;
    incomingLayer.style.zIndex = 1;
    activeLayer.style.zIndex = 2;

    setTimeout(() => {
        isTransitioning = false;
    }, TRANSITION_MS);
}

const fontList = [
    "'Roboto', sans-serif",
    "'Playfair Display', serif",
    "'Bebas Neue', sans-serif",
    "'Pacifico', cursive",
    "'Space Mono', monospace",
    "'Oswald', sans-serif",
    "'Caveat', cursive",
    "Georgia, serif",
    "'Courier New', monospace",
    "'Poppins', sans-serif",
    "'Montserrat', sans-serif",
    "'Inter', sans-serif",
    "'Open Sans', sans-serif",
    "'Lato', sans-serif",
    "'Raleway', sans-serif",
    "'Nunito', sans-serif",
    "'Nunito Sans', sans-serif",
    "'Source Sans 3', sans-serif",
    "'Work Sans', sans-serif",
    "'DM Sans', sans-serif",
    "'Manrope', sans-serif",
    "'Outfit', sans-serif",
    "'Plus Jakarta Sans', sans-serif",
    "'Urbanist', sans-serif",
    "'Rubik', sans-serif",
    "'Quicksand', sans-serif",
    "'Comfortaa', cursive",
    "'Josefin Sans', sans-serif",
    "'Barlow', sans-serif",
    "'Barlow Condensed', sans-serif",
    "'Archivo', sans-serif",
    "'Archivo Black', sans-serif",
    "'Anton', sans-serif",
    "'League Spartan', sans-serif",
    "'Righteous', cursive",
    "'Alfa Slab One', serif",
    "'Abril Fatface', serif",
    "'Lobster', cursive",
    "'Dancing Script', cursive",
    "'Great Vibes', cursive",
    "'Satisfy', cursive",
    "'Sacramento', cursive",
    "'Kalam', cursive",
    "'Patrick Hand', cursive",
    "'Indie Flower', cursive",
    "'Permanent Marker', cursive",
    "'Shadows Into Light', cursive",
    "'Amatic SC', cursive",
    "'Fira Code', monospace",
    "'JetBrains Mono', monospace",
    "'Roboto Mono', monospace",
    "'IBM Plex Mono', monospace",
    "'Source Code Pro', monospace",
    "'Inconsolata', monospace",
    "'Press Start 2P', monospace",
    "'VT323', monospace",
    "'Orbitron', sans-serif",
    "'Audiowide', sans-serif",
    "'Exo 2', sans-serif",
    "'Rajdhani', sans-serif",
    "'Space Grotesk', sans-serif",
    "'Syne', sans-serif",
    "'Bodoni Moda', serif",
    "'Cormorant Garamond', serif",
    "'Libre Baskerville', serif",
    "'Merriweather', serif",
    "'Lora', serif",
    "'Crimson Text', serif",
    "'Cormorant', serif",
    "'Cinzel', serif",
    "'DM Serif Display', serif",
    "'Libre Franklin', sans-serif",
    "'Cabin', sans-serif",
    "'Karla', sans-serif",
    "'Figtree', sans-serif",
    "'Lexend', sans-serif",
    "'Mulish', sans-serif",
    "'Titillium Web', sans-serif",
    "'Heebo', sans-serif",
    "'Maven Pro', sans-serif",
    "'Chakra Petch', sans-serif",
    "'Play', sans-serif"
];

let fontIndex = 0;
const fontDemo = document.getElementById("fontDemo");
fontDemo.style.fontFamily = fontList[fontIndex];

const FONT_DELAY_MS = 300; 
let isFontChanging = false;

function applyFont(index) {
    isFontChanging = true;
    fontDemo.style.fontFamily = fontList[index];
    console.log(`Font: ${fontList[index]}, index: ${index}`);

    setTimeout(() => {
        isFontChanging = false;
    }, FONT_DELAY_MS);
}

function getKeyboardInput() {
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            if (isTransitioning) return; 
            colorIndex = (colorIndex + 1) % colorValues.length;
            applyColor(colorIndex, 1);
        } else if (event.key === "ArrowLeft") {
            if (isTransitioning) return;
            colorIndex = (colorIndex - 1 + colorValues.length) % colorValues.length;
            applyColor(colorIndex, -1);
        } else if (event.key === "ArrowUp") {
            if (isFontChanging) return;
            fontIndex = (fontIndex + 1) % fontList.length;
            applyFont(fontIndex);
        } else if (event.key === "ArrowDown") {
            if (isFontChanging) return;
            fontIndex = (fontIndex - 1 + fontList.length) % fontList.length;
            applyFont(fontIndex);
        }
    });
}

getKeyboardInput();