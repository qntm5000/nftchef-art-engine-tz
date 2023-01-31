"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "";
const baseUri = "";

const outputJPEG = false; // if false, the generator outputs png's
/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 0;

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 30,
    //namePrefix: "Monkey",
    layersOrder: [
      { name: "Background" },
      { name: "Ski Mask" },
      { name: "Logo 1" },
      { name: "Logo 2" },
      { name: "Base" },
      { name: "Shirt" },
      { name: "Chain" },
      { name: "Left Hand" },
      { name: "Right Hand" },
      { name: "Finger Tattoos" },
      { name: "Ring" },
      { name: "Mouth" },

      
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  white: ["Logo 1 White", "Logo 2 White"],
  "snow camo": ["Logo 1 White", "Logo 2 White"],
  yellow: ["Logo 1 White", "Logo 2 White"],
  "rainbow LV": ["Logo 1 White", "Logo 2 White"],
  "jungle camo": ["Logo 1 White", "Logo 2 White"],
  "desert camo": ["Logo 1 White", "Logo 2 White"],
  green: ["Logo 1 White", "Logo 2 White"],
  black: ["Logo 1 Black", "Logo 2 Black"],
  "blue camo": ["Logo 1 Black", "black 5 point star", "white 5 point star", "basketball jersey", "red button up", "red plaid"],
  "red camo": ["Logo 1 Black", "Logo 2 Black", "black 6 point star", "white 6 point start", "blue button up", "blue plaid", "rollin 60s"],
  "blue bandana": ["black 5 point star", "white 5 point star", "basketball jersey", "red button up", "red plaid"],
  "red bandana": ["black 6 point star", "white 6 point start", "blue button up", "blue plaid", "rollin 60s"],
  "black red aura": ["blue bandana", "blue camo", "black 6 point star", "white 6 point star", "blue button up", "blue plaid", "rollin 60s"],
  "grey red aura": ["blue bandana", "blue camo", "black 6 point star", "white 6 point star", "blue button up", "blue plaid", "rollin 60s"],
  "black blue aura": ["red bandana", "red camo", "black 5 point star", "white 5 point star", "basketball jersey", "red button up", "red plaid"],
  "grey blue aura": ["red bandana", "red camo", "black 5 point star", "white 5 point star", "basketball jersey", "red button up", "red plaid"],
  "black 5 point star": ["blue button up", "blue plaid", "rollin 60s"],
  "white 5 point star": ["blue button up", "blue plaid", "rollin 60s"],
  "black 6 point star": ["red button up", "red plaid", "basketball jersey"],
  "white 6 point star": ["red button up", "red plaid", "basketball jersey"],
  "black OG logo": ["OG logo"],
  "white OG logo": ["OG logo"],
  "black diamond": ["diamond"],
  "white diamond": ["diamond"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  "left dollar signs": "dollar signs",
  "left gangsta" : "gangsta",
  "left gold knuckles": "gold knuckles",
  "left if crown": "crown",
  "left if diamond": "diamond",
  "left if dollar sign": "dollar sign",
  "left if GG": "GG",
  "left if OG": "OG",
  "left if Solana": "Solana",
  "left if square": "square",
  "left if star": "star",
  "left mf crown": "crown",
  "left mf diamond": "diamond",
  "left mf dollar sign": "dollar sign",
  "left mf GG": "GG",
  "left mf OG": "OG",
  "left mf Solana": "Solana",
  "left mf square": "square",
  "left mf star": "star",
  "left pf crown": "crown",
  "left pf diamond": "diamond",
  "left pf dollar sign": "dollar sign",
  "left pf GG": "GG",
  "left pf OG": "OG",
  "left pf Solana": "Solana",
  "left pf square": "square",
  "left pf star": "star",
  "left rf crown": "crown",
  "left rf diamond": "diamond",
  "left rf dollar sign": "dollar sign",
  "left rf GG": "GG",
  "left rf OG": "OG",
  "left rf Solana": "Solana",
  "left rf square": "square",
  "left rf star": "star",
  "right dollar signs": "dollar signs",
  "right gangsta" : "gangsta",
  "right gold knuckles": "gold knuckles",
  "right if crown": "crown",
  "right if diamond": "diamond",
  "right if dollar sign": "dollar sign",
  "right if GG": "GG",
  "right if OG": "OG",
  "right if Solana": "Solana",
  "right if square": "square",
  "right if star": "star",
  "right mf crown": "crown",
  "right mf diamond": "diamond",
  "right mf dollar sign": "dollar sign",
  "right mf GG": "GG",
  "right mf OG": "OG",
  "right mf Solana": "Solana",
  "right mf square": "square",
  "right mf star": "star",
  "right pf crown": "crown",
  "right pf diamond": "diamond",
  "right pf dollar sign": "dollar sign",
  "right pf GG": "GG",
  "right pf OG": "OG",
  "right pf Solana": "Solana",
  "right pf square": "square",
  "right pf star": "star",
  "right rf crown": "crown",
  "right rf diamond": "diamond",
  "right rf dollar sign": "dollar sign",
  "right rf GG": "GG",
  "right rf OG": "OG",
  "right rf Solana": "Solana",
  "right rf square": "square",
  "right rf star": "star",
  "black barbed wire": "barbed wire",
  "black Bentley logo": "Bentley logo",
  "black cross hairs": "cross hairs",
  "black FTP": "FTP",
  "black fuck you" : "fuck you",
  "black get money": "get money",
  "black illuminati triangle": "illuminati triangle",
  "black OG Labz": "OG Labz",
  "black OG logo": "OG logo",
  "black outlaw": "outlaw",
  "black pay me": "pay me",
  "black Rolls Royce logo": "Rolls Royce logo",
  "black savage" : "savage",
  "black t.i.n.o." : "t.i.n.o.",
  "black thug life": "thug life",
  "white barbed wire": "barbed wire",
  "white Bentley logo": "Bentley logo",
  "white cross hairs": "cross hairs",
  "white FTP": "FTP",
  "white fuck you" : "fuck you",
  "white get money": "get money",
  "white illuminati triangle" : "illuminati triangle",
  "white OG Labz" : "OG Labz",
  "white OG logo" : "OG logo",
  "white outlaw" : "outlaw",
  "white pay me" : "pay me",
  "white Rolls Royce logo" : "Rolls Royce logo",
  "white savage" : "savage",
  "white t.i.n.o" : "t.i.n.o.",
  "white thug life" : "thug life",
  "black 5 point star" : "5 point star",
  "black 6 point star" : "6 point star",
  "black 100 emoji" : "100 emoji",
  "black ak-47" : "ak-47",
  "black broken heart" : "broken heart",
  "black cross" : "cross",
  "black diamond" : "diamond",
  "black dice" : "dice",
  "black dollar sign" : "dollar sign",
  "black lipstick kiss" : "lipstick kiss",
  "black razor blade" : "razor blade",
  "black skull and bones" : "skull and bones",
  "black Solana logo" : "Solana logo",
  "black tear drop" : "tear drop",
  "black uzi" : "uzi",
  "black weed leaf" : "weed leaf",
  "white 5 point star" : "5 point star",
  "white 6 point star" : "6 point star",
  "white 100 emoji" : "100 emoji",
  "white ak-47" : "ak-47",
  "white broken heart" : "broken heart",
  "white cross" : "cross",
  "white diamond" : "diamond",
  "white dice" : "dice",
  "white dollar sign" : "dollar sign",
  "white lipstick kiss" : "lipstick kiss",
  "white razor blade" : "razor blade",
  "white skull and bones" : "skull and bones",
  "white Solana logo" : "Solana logo",
  "white tear drop" : "tear drop",
  "white uzi" : "uzi",
  "white weed leaf" : "weed leaf",
  
};

const debugLogs = true;

const format = {
  width: 1080,
  height: 1080,
};

const background = {
  generate: false,
  brightness: "",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  {
  trait_type: "Status",
    value: "OG",
   },
   //{
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 400;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
